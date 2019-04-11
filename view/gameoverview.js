import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Root } from "native-base";
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, ImageBackground, Image, 
        Animated, TouchableHighlight, Dimensions, FlatList, ScrollView} from 'react-native';
import { Font, AppLoading } from "expo";
import { createStackNavigator } from 'react-navigation';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import {db} from '../db.js';
import { Avatar,ListItem } from 'react-native-elements';
import {updateItem} from '../service/MyServiceInterface';
import Confetti from 'react-native-confetti';
import renderIf from './renderIf';


let itemsRef = db.ref('/items');
var randomWords = require('random-words');
let height = Dimensions.get('window').height
let width = Dimensions.get('window').width


export default class GameOverView extends React.Component {

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return params;
    };

    constructor(props) {
        super(props);
        this.state = {
            timer: 5,
            typedWord: '',
            currentWord: '',
            difficultyWords: 5,
            score: 0,
            badScore: 0,
            startButtonVisible: true,
            monHeight: new Animated.Value(300),
            monMouth: new Animated.Value(1),
            monPupil: new Animated.Value(0),
            avaTop: new Animated.Value(50),
            avaSide: new Animated.Value(125),
            avaOpacity: new Animated.Value(1),
            isModalVisible: false,
            visible: false,
            items: [],
            gameOverMove: new Animated.Value(400),
            scoreTest: 3,
            username: 'uu',
            objectId:'',
            params:this.props.navigation.state.params,
            scoreboardOpa: 0,

        };
    };
  
    //scoreboard stuff
    componentDidMount() {

        itemsRef.ref.on('value', (snapshot) => {
            const userObj = snapshot.val();
            // this.name = userObj.name;
            // this.avatar = userObj.avatar;
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({ items });
            console.log(this.state.items)
        });

         if(this._confettiView) {
           this._confettiView.startConfetti();
        };

       
    }

    componentWillUnmount() {
        clearInterval(this.clockCall);
    }

    _renderSeparator(sectionID,rowID){
        return (
            <View style={styles.separatorLine} key={"sectionID_"+sectionID+"_rowID_"+rowID}></View>
        );
    }


    render() {
        let imageGameBack = require("./back2.png");
        let gameOver = require("./Game-Over.png")
        const { navigation } = this.props;
        const someId = navigation.getParam('someId', 'NO-ID');
        const someName = navigation.getParam('someName', 'No title');
        console.log(someName)
        const someImage = navigation.getParam('someImage', 'https://i.pinimg.com/originals/08/97/f6/0897f6353b2469da4b9501462d9c08aa.gif')
        const someObjectId = navigation.getParam('objectId', 'objectId')
        console.log("someObjectId passed into chompView is ", someObjectId)


        return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>     
            <ImageBackground source={imageGameBack} style={{width: '100%', height: '100%'}}>
            <Confetti ref={(node) => this._confettiView = node}/>

            <Animated.View style={[styles.greyScreen]}>
            <Animated.Image 
            source={gameOver}
            style={styles.gameOver}>
            </Animated.Image>

               <View style = {{ left: -9, top: 150, margin: 25, height: height-240, width: width-30, 
                        backgroundColor: '#d1cfce', opacity: 1, borderRadius: 8}}> 
                      <Text style = {{ textAlign: 'center', fontSize: 25, margin: 5, fontWeight: 'bold', color: '#4a4847'}}> SCOREBOARD </Text>
                        <ScrollView style = {{borderRadius: 5, borderWidth: 2, borderColor: 'black', margin: 20 }}>
                          {
                            this.state.items.map((l, i) => (
                           
                              <ListItem
                                key = {i}
                                leftAvatar={{ source: { uri: l.avatar} }}
                                title={l.name}
                                subtitle= {
                                    <View> 
                                        <Text> Score: {l.score} </Text>
                                    </View>
                                }
                              /> 
                            ))

                          }
                        </ScrollView> 
                  
              </View>
            </Animated.View>
          </ImageBackground>
      </View>
        );
    }
}



const styles = StyleSheet.create({
    textInput: {
        height: 40,
        width: 300,
        top: 350,
        left: 25,
        borderColor: 'gray',
        borderWidth: 1,
        position: 'absolute',
        color: 'white',
        fontSize: 25
    },
    button: {
        top: 275,
        width: 200,
        left: 75
    },
    buttonMove: {
        position: 'absolute',
        width: 200,
        height: 100,
        top: 500,
        opacity: 1,
        left: 76,
    },
    openText: {
        fontSize: 30,
        fontWeight: 'bold',
        position: 'absolute',
        top: 200,
        left: 120


    },
    monBody: {
        position: 'absolute',
        width: 270,
        borderRadius: 50,
        backgroundColor: "#B61F24",
        bottom: -20,
        left: 40,


    },
    eyeLeft: {
        position: 'relative',
        top: 15,
        left: 90,
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: '#fff',
    },
    pupil1: {
        position: 'relative',
        width: 40,
        height: 40,
        left: 30,
        borderRadius: 100 / 2,
        backgroundColor: '#000000',
    },
    mouth: {
        position: 'relative',
        bottom: -30,
        left: 50,
        width: 180,
        borderRadius: 150,
        backgroundColor: '#333',
        zIndex: 11,
        overflow: 'hidden',
    },
    tooth1: {
        position: 'relative',
        top: -10,
        left: 62,
        width: 30,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: 'black',

    },
    tooth2: {
        position: 'relative',
        top: -60,
        left: 90,
        width: 30,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: 'black',
    },
    armLeft: {
        position: 'absolute',
        top: 50,
        left: -35,
        borderRadius: 50,
        width: 60,
        height: 250,
        backgroundColor: '#B61F24',
        overflow: 'hidden',
        transform: [{ rotate: '340deg' }],
    },
    armRight: {
        position: 'absolute',
        top: 50,
        left: 250,
        borderRadius: 50,
        width: 60,
        height: 250,
        backgroundColor: '#B61F24',
        overflow: 'hidden',
        transform: [{ rotate: '200deg' }],
    },
    avatar: {
        position: 'absolute',
        width: 100,
        height: 100,

    },
    rope: {
        position: 'absolute',
        width: 100,
        height: 50,
        left: 130,
        transform: [{ rotate: '90deg' }],
    },
    currentWordStyle: {
        top: 250,
        color: '#f73b8c',
        fontWeight: 'bold',
        fontSize: 30,
        position: 'absolute',
        margin: 'auto'
    },
    gameOver: {
        width: 300,
        height: 200,
        opacity: 1,
        position: 'absolute',
        top: 25,
        left: 25,
        resizeMode: 'contain',
    },
    greyScreen: {
        width: 400,
        height: 750,
        position: 'absolute',
        
    }

});