import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const GameOverScreen = ({ numberOfRounds, userNumber, onRestart }) => {
  return (
    <View style={style.screen}>
      <Text>Game Over !</Text>
      <Text>Number Of Roundes: {numberOfRounds}</Text>
      <Text>Number Was: {userNumber}</Text>
      <Button title='NEW GAME' onPress={onRestart} />
    </View>
  );
};
export default GameOverScreen;
const style = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});
