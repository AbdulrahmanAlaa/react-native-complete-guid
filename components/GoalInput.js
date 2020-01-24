import React, { useState } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Button
} from 'react-native';

const GoalInput = ({ onAddInput }) => {
  const [courseGoal, setCourseGoal] = useState('');
  const goalInputHandler = enteredText => setCourseGoal(enteredText);

  return (
      <View style={style.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={style.input}
          placeholder='Course Goals'
        />
        <Button onPress={() => onAddInput(courseGoal)} title='ADD' />
      </View>
  );
};

const style = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10
  }
});
export default GoalInput;
