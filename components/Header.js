import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => (
  <View style={style.header}>
    <Text style={style.title}>{title}</Text>
  </View>
);
export default Header;

const style = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: 'lightgray',
    alignItems: 'center'
  },
  title: {
    color: 'black',
    fontSize: 18
  }
});
