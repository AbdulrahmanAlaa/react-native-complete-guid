import React, { useState, useRef } from 'react';
import { StyleSheet, View ,Text } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const onstartGameHandler = userSelectedNumber => {
    setUserNumber(userSelectedNumber);
  };

  let content = <StartGameScreen onStart={onstartGameHandler} />;
  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />;
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
