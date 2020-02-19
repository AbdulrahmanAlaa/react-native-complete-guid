import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/color';
import { Input } from '../components/Input';
import NumberContainer from '../components/NumberContainer';
const StartGameScreen = props => {
  const [enteredNumber, setEnteredNumber] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [confirmedNumber, setConfirmedNumber] = useState();
  const onChangeTextHandler = text => {
    setEnteredNumber(text.replace(/[^0-9]/g, ''));
  };
  const resetInputHandler = () => {
    setEnteredNumber('');
    setConfirmed(false);
    Keyboard.dismiss();
  };
  const confirmInputHandler = () => {
    const selectedNumber = parseInt(enteredNumber);
    if (isNaN(selectedNumber) || selectedNumber <= 0 || selectedNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }
    setEnteredNumber('');
    setConfirmed(true);
    setConfirmedNumber(selectedNumber);
    Keyboard.dismiss();
  };

  let confirmedSettings;
  if (confirmed) {
    confirmedSettings = (
      <Card style={style.summaryContainer}>
        <Text>You Selected</Text>
        <NumberContainer>{confirmedNumber}</NumberContainer>
        <Button title='START GAME' onPress={props.onStart} />
      </Card>
    );
  }
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
            <Input
              value={enteredNumber}
              onChangeText={onChangeTextHandler}
              style={style.input}
            />
            <View style={style.buttonContainer}>
              <View style={style.button}>
                <Button
                  onPress={resetInputHandler}
                  color={Colors.accent}
                  title='RESET'
                />
              </View>
              <View style={style.button}>
                <Button
                  onPress={confirmInputHandler}
                  color={Colors.primary}
                  title='CONFIRM'
                />
              </View>
            </View>
          </Card>
        </View>
        {confirmedSettings}
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
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  }
});
