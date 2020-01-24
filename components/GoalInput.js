import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Button, Modal } from 'react-native';

const GoalInput = ({ onAddInput, visible, onCancel }) => {
  const [courseGoal, setCourseGoal] = useState('');
  const goalInputHandler = enteredText => setCourseGoal(enteredText);

  const onAddInputHandler = () => {
    onAddInput(courseGoal);
    setCourseGoal('');
  };

  return (
    <Modal animationType='slide' visible={visible}>
      <View style={style.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={style.input}
          placeholder='Course Goals'
        />
        <View style={style.buttonsContainer}>
          <View style={style.button}>
            <Button color='red' onPress={onCancel} title='CANCEL' />
          </View>
          <View style={style.button}>
            <Button onPress={onAddInputHandler} title='ADD' />
          </View>
        </View>
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
    marginBottom: 10
  },
  buttonsContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    width: '40%'
  }
});
export default GoalInput;
