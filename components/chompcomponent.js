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
        this.state = {
            typedWord: '',
            currentWord: '',
            difficultyWords: 1,
            difficultyLength: 4,
            score: 0,
            badScore: 0
        };
    };

    _nextWords = () => {
        this.refs.myInput.focus();
        var randWords = randomWords({ exactly: 1, wordsPerString: this.state.difficultyWords, maxLength: this.state.difficultyLength })
        this.setState({
            currentWord: randWords[0]
        });
    };

    _checkWords = (userInput) => {
        this.setState({ typedWord: userInput })
        var curr = this.state.currentWord;
        userInput = userInput.toLowerCase();
        if (curr == userInput) {

            this._nextWords();

            this.setState({
                typedWord: '',
                score: this.state.score + 1
            });



        } else if (userInput.length >= curr.length) {

            this._nextWords();

            this.setState({
                typedWord: '',
                badScore: this.state.badScore + 1
            });


        }
    }

    render() {
        let imageGameBack = require("./gameback.jpg");
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={imageGameBack} style={{width: '100%', height: '100%'}}>

        <Text style={{left: 25, top: 75, fontSize: 60, color: 'white'}}>{this.state.currentWord}</Text>
        <Text style={{left: 25, top: 500, color: 'white'}}>Typed word: {this.state.typedWord}</Text>
        <Text style={{left: 25, top: 525, color: 'white'}}>Score: {this.state.score}</Text>
        <Text style={{left: 25, top: 550, color: 'white'}}>Bad score: {this.state.badScore}</Text>
        <TextInput
          ref="myInput"
          style={styles.textInput}
          onChangeText={typedWord => this._checkWords(typedWord)}
          value={this.state.typedWord}
        />

        <View style={styles.button}>
          <Button
            onPress={this._nextWords}
            title="Start game!"
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
        top: 225,
        left: 25,
        borderColor: 'gray',
        borderWidth: 1,
        position: 'absolute',
        color: 'white'
    },
    button: {
        top: 275,
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