import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import LightText from '../components/LightText';
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
  const [numberRoundes, setNumberRoundes] = useState(0);
  const [currentGuess, setCurrentGuess] = useState(
    generateRamdomBetween(1, 100, userChoice)
  );
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    setNumberRoundes(_numberRoundes => _numberRoundes + 1);
    if (currentGuess === userChoice) {
      onGameOver(numberRoundes);
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
      currentLow.current = currentGuess;
    }

    setCurrentGuess(
      generateRamdomBetween(
        currentLow.current,
        currentHigh.current,
        currentGuess
      )
    );
  };
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
  }
});

export default GameScreen;
