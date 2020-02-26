import React from 'react';
import { Text, StyleSheet } from 'react-native';

const LightText = ({ children, style = {} }) => {
  return <Text style={{ ...style, ...styles.text }}>{children}</Text>;
};
export default LightText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans'
  }
});
