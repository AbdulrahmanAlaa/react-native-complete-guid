import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import color from '../constants/color';

const NumberContainer = ({ children }) => (
  <View style={styles.container}>
    <Text>{children}</Text>
  </View>
);
export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: color.accent,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
  },
  number: {
    color: color.accent,
    fontSize: 22
  }
});
