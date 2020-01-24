import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [listGoals, setListGoals] = useState([]);
  const [isAddModel, setIsAddModel] = useState(false);
  const deleteGoalHandler = key => {
    setListGoals(list => {
      return [...list.filter(item => item.key !== key)];
    });
  };
  const addGoalHandler = goalTitle => {
    setListGoals(listGoals => [
      ...listGoals,
      { key: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddModel(false);
  };
  return (
    <View style={style.screen}>
      <Button title='Add New Goal' onPress={() => setIsAddModel(true)} />
      <GoalInput visible={isAddModel} onAddInput={addGoalHandler} />
      <FlatList
        data={listGoals}
        renderItem={itemDate => (
          <GoalItem
            onDelete={() => deleteGoalHandler(itemDate.item.key)}
            title={itemDate.item.value}
          />
        )}
      />
    </View>
  );
}
const style = StyleSheet.create({
  screen: { padding: 50 }
});
