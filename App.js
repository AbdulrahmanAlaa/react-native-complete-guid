import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={style.screen} >
      <Header title="Home" />
      <StartGameScreen/>
    </View>
  );
}
const style = StyleSheet.create({screen:{flexDirection:'column',flex:1}});
