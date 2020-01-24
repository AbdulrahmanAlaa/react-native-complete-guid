import React from 'react';
import { Text, View,StyleSheet } from 'react-native';

const GoalItem = ({ title }) => (
  <View style={style.listItem}>
    <Text>{title}</Text>
  </View>
);
export default GoalItem;

const style = StyleSheet.create({
  listItem: {
    backgroundColor: 'gray',
    borderColor: 'black',
    marginVertical: 10,
    borderWidth: 1,
    padding: 10
  }
});
