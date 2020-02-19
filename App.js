import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setStateUserNumber] = useState();
  const onstartGameHandler = userSelectedNumber => {
    setStateUserNumber(userSelectedNumber);
  };
  let content = <StartGameScreen onStart={onstartGameHandler} />;
  if (userNumber) {
    content = <GameScreen />;
  }
  return (
    <View style={style.screen}>
      <Header title='Home' />
      {content}
    </View>
  );
}
const style = StyleSheet.create({
  screen: { flexDirection: 'column', flex: 1 }
});
