import React from 'react';
import {  StyleSheet, TextInput } from 'react-native';

export const Input = props => {
  return (
    <TextInput
      {...props}
      style={{ ...props.style, ...style.input }}
      autoCapitalize='none'
      blurOnSubmit
      keyboardType='number-pad'
      autoCorrect={false}
      maxLength={2}
    />
  );
};
const style = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    height: 30,
    marginVertical: 10
  }
});
