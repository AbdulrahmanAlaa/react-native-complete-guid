import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = ({ title, onDelete }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={onDelete}>
    <View style={style.listItem}>
      <Text>{title}</Text>
    </View>
  </TouchableOpacity>
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
