import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Root } from "native-base";
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ImageBackground} from 'react-native';
import { Font, AppLoading } from "expo";
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import ChompComponent from "./chompcomponent"

export default class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  _onPressButton() {
    console.log('You tapped the button!')
  }

    render() {
      let imageBack = require("./back.jpg");
    
    return (
      <View >
       <ImageBackground source={imageBack} style={{width: '100%', height: '100%'}}>

        <Text style = {styles.openText}> TypeLand </Text>
          <View style = {styles.button}>
            <Button onPress={() => this.props.navigation.navigate('Chomp')} color="white" title="Play"/>
          </View>
          <View style = {styles.button2}>
            <Button onPress={() => this.props.navigation.navigate('Details')} color="white" title="How to play"/>
          </View>
        </ImageBackground>
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