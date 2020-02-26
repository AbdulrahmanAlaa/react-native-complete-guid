import React from 'react';
import {  View, StyleSheet, Button } from 'react-native';
import LightText from '../components/LightText';
const GameOverScreen = ({ numberOfRounds, userNumber, onRestart }) => {
  return (
    <View style={style.screen}>
      <LightText>Game Over !</LightText>
      <LightText>Number Of Roundes: {numberOfRounds}</LightText>
      <LightText>Number Was: {userNumber}</LightText>
      <Button title='NEW GAME' onPress={onRestart} />
    </View>
  );
};
export default GameOverScreen;
const style = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});
