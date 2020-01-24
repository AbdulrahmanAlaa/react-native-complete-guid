import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import Card from '../components/Card';

const StartGameScreen = props => {
  return (
    <View style={style.screen}>
      <Text style={style.title}>Start a New Game</Text>
      <View>
        <Card style={style.inputContainer}>
          <Text> select a number </Text>
          <TextInput />
          <View style={style.buttonContainer}>
            <Button title='RESET' />
            <Button title='CONFIRM' />
          </View>
        </Card>
      </View>
    </View>
  );
};
export default StartGameScreen;

const style = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    padding: 10
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  }
});
