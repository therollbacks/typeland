import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Root } from "native-base";
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ImageBackground} from 'react-native';
import { Font, AppLoading } from "expo";
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import ChompComponent from "./chompcomponent"

export default class MainComponent extends React.Component {
  constructor(props) {
    super(props);
  }


    render() {
    
    return (
      <View>
        <Text> tmain component or something </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  openText: {
    fontSize: 55,
    fontWeight: 'bold',
    position: 'absolute', 
    top: 160,
    left: 49,
    color: '#351431'
  },

   button: {
    position: 'absolute', 
    left: 60,
    marginBottom: 30,
    width: 260,
    top: 300,
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 5,
    borderRadius: 10,
    color: 'white'
  },

  button2: {
    position: 'absolute', 
    left: 60,
    marginBottom: 30,
    width: 260,
    top: 370,
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 5,
    borderRadius: 10,
    color: 'white'

  },

  buttonText: {
    padding: 20,
    color: 'white'
  }
});