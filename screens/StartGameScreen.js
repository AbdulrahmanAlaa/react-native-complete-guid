import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/color';
import { Input } from '../components/Input';
const StartGameScreen = props => {
  const [enteredNumber, setEnteredNumber] = useState('');
  const onChangeTextHandler = (text) => {
    setEnteredNumber(text.replace(/[^0-9]/g, ''));
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={style.screen}>
        <Text style={style.title}>Start a New Game</Text>
        <View>
          <Card style={style.inputContainer}>
            <Text> select a number </Text>
            <Input value={enteredNumber} onChangeText={onChangeTextHandler} style={style.input} />
            <View style={style.buttonContainer}>
              <View style={style.button}>
                <Button color={Colors.accent} title='RESET' />
              </View>
              <View style={style.button}>
                <Button color={Colors.primary} title='CONFIRM' />
              </View>
            </View>
          </Card>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
  },
  button: {
    flex: 1,
    marginHorizontal: 5
  },
  input: {
    width: 50,
    textAlign: 'center'
  }
});
