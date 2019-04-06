import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Root } from "native-base";
import { StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Font, AppLoading } from "expo";
import { createStackNavigator } from 'react-navigation';

export default class ChompComponent extends React.Component {

  render() {
     let imageGameBack = require("./gameback.jpg");
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={imageGameBack} style={{width: '100%', height: '100%'}}>

        <Text>Add game screen here</Text>
        
        
        <Button
          title="Exit"
          onPress={() => this.props.navigation.push('Home')}
        />
        </ImageBackground>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  openText: {
    fontSize: 30,
    fontWeight: 'bold',
    position: 'absolute', 
    top: 200,
    left: 120

 
  },

});