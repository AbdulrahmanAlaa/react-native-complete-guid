import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../constants/color';
import BoldText from './BoldText';

const Header = ({ title }) => (
  <View style={style.header}>
    <BoldText style={style.title}>{title}</BoldText>
  </View>
);
export default Header;

const style = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: 'center'
  },
  title: {
    color: 'black'
  }
});
