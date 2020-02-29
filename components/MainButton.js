import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import color from '../constants/color';

const MainButton = ({ children, onPress, style }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={{...style,...styles.button}}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: color.primary
  },
  buttonText: {
    minWidth:100,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'open-sans',
    fontSize:18
  }
});
