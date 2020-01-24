import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoal, setCourseGoal] = useState('');
  const [listGoals, setListGoals] = useState([]);
  const goalInputHandler = enteredText => setCourseGoal(enteredText);
  const addGoalHandler = () => {
    setListGoals(listGoals => [
      ...listGoals,
      { key: Math.random().toString(), value: courseGoal }
    ]);
  };
  return (
    <View style={style.screen}>
      <View style={style.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={style.input}
          placeholder='Course Goals'
        />
        <Button onPress={addGoalHandler} title='ADD' />
      </View>
      <FlatList
        data={listGoals}
        renderItem={itemDate => <GoalItem title={itemDate.item.value}/>}
      />
    </View>
  );
}
const style = StyleSheet.create({
  screen: { padding: 50 },
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
