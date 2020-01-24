import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [listGoals, setListGoals] = useState([]);
  const addGoalHandler = (goalTitle) => {
    setListGoals(listGoals => [
      ...listGoals,
      { key: Math.random().toString(), value: goalTitle }
    ]);
  };
  return (
    <View style={style.screen}>
      <GoalInput onAddInput={addGoalHandler}/>
      <FlatList
        data={listGoals}
        renderItem={itemDate => <GoalItem title={itemDate.item.value} />}
      />
    </View>
  );
}
const style = StyleSheet.create({
  screen: { padding: 50 }
});
