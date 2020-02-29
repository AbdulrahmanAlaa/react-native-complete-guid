import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOverScreen';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const loadFontsAsync = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [numberOfRounds, setNumberOfRounds] = useState(0);
  const [userNumber, setUserNumber] = useState();
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFontsAsync}
        onError={console.log}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

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
  // Show last screenn always
  // return (
  //   <GameOver
  //     numberOfRounds="1"
  //     userNumber="2"
  //     onRestart={startNewGameHandler}
  //   />);
  if (userNumber && numberOfRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (numberOfRounds > 0) {
    content = (
      <GameOver
        numberOfRounds={numberOfRounds}
        userNumber={userNumber}
        onRestart={startNewGameHandler}
      />
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
