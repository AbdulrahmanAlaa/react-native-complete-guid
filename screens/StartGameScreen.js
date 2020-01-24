import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const StartGameScreen = props => {
  return (
    <View style={style.screen}>
      <Text style={style.title}>Start a New Game</Text>
      <View>
        <View style={style.inputContainer}>
          <Text> select a number </Text>
          <TextInput/>
          <View style={style.buttonContainer}>
            <Button title='RESET' />
            <Button title='CONFIRM' />
          </View>
        </View>
      </View>
    </View>
  );
};
export default StartGameScreen;

const style = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    padding: 10
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
      padding:20,
      borderRadius:5,
      elevation:6,
      backgroundColor:'white',
      shadowColor:'black',
      shadowOffset:{width:0,height:2},
      shadowOpacity:0.32,
      shadowRadius:5,
      width:300,
      maxWidth:'80%',
      alignItems:'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  }
});
