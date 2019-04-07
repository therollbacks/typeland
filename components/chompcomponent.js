import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Root } from "native-base";
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Font, AppLoading } from "expo";
import { createStackNavigator } from 'react-navigation';  

var randomWords = require('random-words');

export default class ChompComponent extends React.Component {

    constructor(props) {
      super(props);
      this.state = { typedWord: '',
                     difficultyWords: 1,
                     difficultyLength: 4
                   };
    };

    _nextWords = () => {
      var currentPhrase = randomWords({exactly:1, wordsPerString:this.state.difficultyWords, maxLength: this.state.difficultyLength})
      this.setState({
          typedWord: currentPhrase[0]
        });
    };



    render() {
        let imageGameBack = require("./gameback.jpg");
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={imageGameBack} style={{width: '100%', height: '100%'}}>

        <Text style={{left: 25, top: 75, color: 'white'}}>{this.state.typedWord}</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(typedWord) => this.setState({typedWord})}
          value={this.state.typedWord}
        />

        <View style={styles.button}>
          <Button
            onPress={this._nextWords}
            title="Get Words"
            color="#a0a0a0"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        
        </ImageBackground>
      </View>
        );
    }
}



const styles = StyleSheet.create({
    textInput: {
      height: 40,
      width: 300,
      top: 100,
      left: 25,
      borderColor: 'gray',
      borderWidth: 1,
      position: 'absolute',
      color: 'white'
    },
    button: {
      top: 150,
      width: 200,
      left: 75
    },
    openText: {
        fontSize: 30,
        fontWeight: 'bold',
        position: 'absolute',
        top: 200,
        left: 120


    },

});