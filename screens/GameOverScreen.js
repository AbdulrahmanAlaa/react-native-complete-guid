import React from 'react';
import { View, StyleSheet, Button, Image, Text } from 'react-native';
import LightText from '../components/LightText';
import BoldText from '../components/BoldText';
import Colors from '../constants/color';
import MainButton from '../components/MainButton';
const GameOverScreen = ({ numberOfRounds, userNumber, onRestart }) => {
  return (
    <View style={style.screen}>
      <BoldText>Game Over !</BoldText>
      <View style={style.imageContainer}>
        <Image
          fadeDuration={1000}
          resizeMode='cover'
          style={style.image}
          source={require('../assets/images/success.png')}
          // source={{
          //   uri:
          //     'https://www.telegraph.co.uk/content/dam/Travel/ski/K2-mountain-Andrzej-Bargiel-first-ski-descent-by-Piotr-Pawlus-Red-Bull-Content-Pool.jpg?imwidth=450'
          // }}
        />
      </View>

      <View style={style.textContainer}>
        <LightText style={style.txt}>
          Your phone needed{' '}
          <Text style={style.numberText}>{numberOfRounds}</Text> rounds to guess
          the number <Text style={style.numberText}>{userNumber}</Text>
        </LightText>
      </View>

      <MainButton  onPress={onRestart} >NEW GAME</MainButton>
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
    overflow: 'hidden',
    borderWidth: 3
  },
  image: {
    width: '100%',
    height: '100%'
  },
  txt: {
    textAlign: 'center'
  },
  textContainer: {
    marginHorizontal: 30,
    marginVertical:10
  },
  numberText: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary
  }
});
