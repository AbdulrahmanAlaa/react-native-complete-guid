import React,{useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

const generateRamdomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNumber = Math.floor(Math.random() * (max - min) - min);
  if (rndNumber === exclude) {
    generateRamdomBetween(min, max, exclude);
  } else {
    return rndNumber;
  }
};

const GameScreen = ({userChoice}) => {
    const [currentGuess, setCurrentGuess] = useState(generateRamdomBetween(1,100,userChoice))
};

const styles = StyleSheet.create({});

export default GameScreen;
