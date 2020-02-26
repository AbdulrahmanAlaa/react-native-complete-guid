import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

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

const GameScreen = ({ userChoice }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRamdomBetween(1, 100, userChoice)
  );
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const guessHandler = guess => {
    if (currentGuess === userChoice) {
      console.log('winner');
      return;
    }
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
    console.log(
      currentLow.current,
      currentHigh.current,
      userChoice,
      currentGuess
    );
    setCurrentGuess(
      generateRamdomBetween(currentLow.current, currentHigh.current,currentGuess)
    );
  };
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title='LOWER' onPress={guessHandler.bind(this, 'lower')} />
        <Button title='GREATER' onPress={guessHandler.bind(this, 'high')} />
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
