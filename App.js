import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOverScreen';

export default function App() {
  const [numberOfRounds, setNumberOfRounds] = useState(0);
  const [userNumber, setUserNumber] = useState();

  const startNewGameHandler = () => {
    setNumberOfRounds(0);
    setUserNumber(null);
  };

  const onstartGameHandler = userSelectedNumber => {
    setUserNumber(userSelectedNumber);
  };
  const gameOverHandler = _numberOfRounds => {
    setNumberOfRounds(_numberOfRounds);
  };

  let content = <StartGameScreen onStart={onstartGameHandler} />;
  if (userNumber && numberOfRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (numberOfRounds > 0) {
    content = (
      <GameOver numberOfRounds={numberOfRounds} userNumber={userNumber} onRestart={startNewGameHandler} />
    );
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
