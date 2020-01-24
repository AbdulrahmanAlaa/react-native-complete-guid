import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Button, Modal } from 'react-native';

const GoalInput = ({ onAddInput, visible }) => {
  const [courseGoal, setCourseGoal] = useState('');
  const goalInputHandler = enteredText => setCourseGoal(enteredText);

  return (
    <Modal animationType='slide' visible={visible}>
      <View style={style.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={style.input}
          placeholder='Course Goals'
        />
        <Button onPress={() => onAddInput(courseGoal)} title='ADD' />
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
    marginBottom:10
  }
});
export default GoalInput;
