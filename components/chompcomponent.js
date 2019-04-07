import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Root } from "native-base";
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, ImageBackground, Image, Animated } from 'react-native';
import { Font, AppLoading } from "expo";
import { createStackNavigator } from 'react-navigation';

var randomWords = require('random-words');

export default class ChompComponent extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            typedWord: '',
            currentWord: '',
            difficultyWords: 1,
            difficultyLength: 4,
            score: 0,
            badScore: 0,
            monHeight: new Animated.Value(300),
            monMouth: new Animated.Value(150),
            monPupil: new Animated.Value(0),
        };
    };

    _nextWords = () => {
        this.refs.myInput.focus();
        var randWords = randomWords({ exactly: 1, wordsPerString: this.state.difficultyWords, maxLength: this.state.difficultyLength })
        this.setState({
            currentWord: randWords[0]
        });

    Animated.sequence([
    Animated.timing(this.state.monHeight, { toValue: 600, duration: 1000 }),

    Animated.parallel([
    Animated.timing(this.state.monMouth, { toValue: 1, duration: 1000 }),
    Animated.timing(this.state.monPupil, { toValue: 30, duration: 1000 }),
    ]),
    Animated.sequence([
        Animated.timing(this.state.monMouth, { toValue: 150, duration: 1000, }),
        Animated.timing(this.state.monMouth, { toValue: 1, duration: 1000,}),
    ])
        ]).start()

    




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
        let imageGameBack = require("./back2.png");
        const { navigation } = this.props;
        const someId = navigation.getParam('someId', 'NO-ID');
        const someName = navigation.getParam('someName', 'No title');
        console.log(someName)

        return (

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
            
        <ImageBackground source={imageGameBack} style={{width: '100%', height: '100%'}}>
        <Animated.View style={[styles.monBody,{height: this.state.monHeight}]}>
        <View style={styles.armLeft}></View>
        <View style={styles.armRight}></View>
                <View style={styles.eyeLeft}>
                    <Animated.View style={[styles.pupil1,{top:this.state.monPupil}]}></Animated.View>
                </View>
                <Animated.View style={[styles.mouth,{height:this.state.monMouth}]}>
                    <View style={styles.tooth1}></View>
                    <View style={styles.tooth2}></View>
                </Animated.View>
        </Animated.View>

        <Text style={{left: 25, top: 75, color: 'white', fontWeight: 'bold', fontSize: 12}}>Player: {someName}</Text>
        <Text style={{left: 25, top: 80, color: 'white', fontWeight: 'bold', fontSize: 12}}>Current word: {this.state.currentWord}</Text>
        <Text style={{left: 25, top: 85, color: 'white', fontWeight: 'bold', fontSize: 12}}>Typed word: {this.state.typedWord}</Text>
        <Text style={{left: 25, top: 90, color: 'white', fontWeight: 'bold', fontSize: 12}}>Score: {this.state.score}</Text>
        <Text style={{left: 25, top: 95, color: 'white', fontWeight: 'bold', fontSize: 12}}>Bad score: {this.state.badScore}</Text>
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
    monBody: {
        position:'absolute',
        width:300,
        borderRadius: 50,
        backgroundColor: "#B61F24",
        bottom:-20,
        left:27.5,

        
    },
    eyeLeft: {
        position: 'relative',
        top:15,
        left: 100,
        width: 100,
        height: 100,
        borderRadius: 100/2,
        backgroundColor: '#fff',
    },
    pupil1: {
        position:'relative',
        width:40,
        height:40,
        left:30,
        borderRadius: 100/2,
        backgroundColor: '#000000',
    },
    mouth: {
        position: 'relative',
        bottom:-30,
        left: 90,
        width:125,
        borderRadius: 150,
        backgroundColor: '#333',
        zIndex:11,
        overflow: 'hidden',
    },
    tooth1: {
        position:'relative',
        top:-10,
        left:32,
        width:30,
        height:50,
        borderRadius:50,
        backgroundColor:'#fff',
        borderWidth: 0.5,
        borderColor: 'black',

    },
    tooth2: {
        position:'relative',
        top:-60,
        left:60,
        width:30,
        height:50,
        borderRadius:50,
        backgroundColor:'#fff',
        borderWidth: 0.5,
        borderColor:'black',
    },
    armLeft: {
        position:'absolute',
        top:50,
        borderRadius: 50,
        width:60,
        height:250,
        backgroundColor: '#B61F24',
        overflow:'hidden',
        transform: [{rotate: '150deg'}],
    },
    armRight: {
       position:'absolute',
        top:50,
        left:250,
        borderRadius: 50,
        width:60,
        height:250,
        backgroundColor: '#B61F24',
        overflow:'hidden',
        transform: [{rotate: '200deg'}], 
    }
    

});