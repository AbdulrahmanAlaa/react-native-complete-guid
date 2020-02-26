import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const GameOverScreen = () => {
  return (
    <View style={style.screen}>
      <Text>Game Over !</Text>
    </View>
  );
};
export default GameOverScreen;
const style = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});
