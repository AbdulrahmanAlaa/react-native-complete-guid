import React from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';
import LightText from '../components/LightText';
const GameOverScreen = ({ numberOfRounds, userNumber, onRestart }) => {
  return (
    <View style={style.screen}>
      <LightText>Game Over !</LightText>
      <View style={style.imageContainer}>
        <Image
          resizeMode="cover"
          style={style.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <LightText>Number Of Roundes: {numberOfRounds}</LightText>
      <LightText>Number Was: {userNumber}</LightText>
      <Button title='NEW GAME' onPress={onRestart} />
    </View>
  );
};
export default GameOverScreen;
const style = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: 'black',
    marginVertical: 30,
    overflow:'hidden',
    borderWidth:3
  },
  image: {
    width: '100%',
    height: '100%'
  }
});
