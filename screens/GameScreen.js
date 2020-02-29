import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Button, Alert, ScrollView } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import LightText from '../components/LightText';
import BoldText from '../components/BoldText';
import MainButton from '../components/MainButton';
import { Ionicons } from '@expo/vector-icons';
const generateRamdomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNumber = Math.floor(Math.random() * (max - min)) + min;
  if (rndNumber === exclude) {
    generateRamdomBetween(min, max, exclude);
  } else {
    return rndNumber;
  }
};

const GameScreen = ({ userChoice, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRamdomBetween(1, 100, userChoice)
  );
  const [guessNumbers, setGuessNumbers] = useState([]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    setGuessNumbers(guessNumbers => [currentGuess, ...guessNumbers]);
    if (currentGuess === userChoice) {
      onGameOver(guessNumbers.length);
    }
  }, [userChoice, currentGuess, onGameOver]);
  const guessHandler = guess => {
    if (
      (guess === 'lower' && currentGuess < userChoice) ||
      (guess === 'high' && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie", "We know that's not right ", {
        text: 'Sorry',
        style: 'cancel'
      });
      return;
    }
    if (guess === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }

    setCurrentGuess(
      generateRamdomBetween(
        currentLow.current,
        currentHigh.current,
        currentGuess
      )
    );
  };

  const renderListItem = (value, index) => (
    <View key={value} style={styles.listItem}>
      <BoldText>#{index}</BoldText>
      <LightText>{value}</LightText>
    </View>
  );
  return (
    <View style={styles.screen}>
      <LightText>Opponent's Guess</LightText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={guessHandler.bind(this, 'lower')}>
          <Ionicons size={24} color='white' name='md-remove' />
        </MainButton>
        <MainButton onPress={guessHandler.bind(this, 'high')}>
          <Ionicons size={24} color='white' name='md-add' />
        </MainButton>
      </Card>

      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {guessNumbers.map((guess, index) =>
            renderListItem(guess, guessNumbers.length - index)
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 10, alignItems: 'center' },
  buttonContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 20,
    width: 300,
    maxWidth: '80%'
  },
  list:{
    // alignItems:'center',
    flexGrow: 1, //fix andriod scrollview
    justifyContent:'flex-end',
  },
  listContainer: {
    flex: 1, //fix andriod scrollview
    width: '80%'
  },
  listItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    marginVertical: 10
  }
});

export default GameScreen;
