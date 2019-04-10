import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Root } from "native-base";
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, ImageBackground, Image, 
        Animated, TouchableHighlight, Dimensions, FlatList, ScrollView} from 'react-native';
import { Font, AppLoading } from "expo";
import { createStackNavigator } from 'react-navigation';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
let itemsRef = db.ref('/items');
import {db} from '../db.js';
import { Avatar,ListItem } from 'react-native-elements';
import {updateItem} from '../service/MyServiceInterface';

var randomWords = require('random-words');
let height =  Dimensions.get('window').height
let width=  Dimensions.get('window').width


export default class ChompComponent extends React.Component {

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return params;
    };

    constructor(props) {
        super(props)
        this.state = {
            typedWord: '',
            currentWord: '',
            difficultyWords: 5,
            score: 0,
            badScore: 0,
            monHeight: new Animated.Value(300),
            monMouth: new Animated.Value(150),
            monPupil: new Animated.Value(0),
            avaTop: new Animated.Value(50),
            avaSide: new Animated.Value(125),
            avaOpacity: new Animated.Value(1),
            isModalVisible: false,
            visible: false,
            items: [],
            gameOverMove: new Animated.Value(400),
            score: 3,
            username: 'uu',
            objectId:'',
            params:this.props.navigation.state.params,

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.tryparams = 'tryparams'

    };

    runAnimation() {
        this.state.avaSide.setValue(125);
        Animated.sequence([
        Animated.timing(this.state.avaSide, { toValue: 120, duration:150}),
        Animated.timing(this.state.avaSide, { toValue: 130, duration:150})
        ]).start(() => this.runAnimation());
    }
   
    _nextWords = () => {
        this.refs.myInput.focus();
        diffwords = Math.floor(this.state.difficultyWords/5);
        difflen = this.state.score%5 + 3
        var randWords = randomWords({ exactly: 1, wordsPerString: diffwords, maxLength: difflen })
        this.setState({
            currentWord: randWords[0]
        });
    ;

    Animated.sequence([
    Animated.timing(this.state.monHeight, { toValue: 600, duration: 1000 }),

    Animated.parallel([
    Animated.timing(this.state.monMouth, { toValue: 1, duration: 250 }),
    Animated.timing(this.state.monPupil, { toValue: 30, duration: 500 }),
    ]),
    Animated.sequence([
        Animated.timing(this.state.monMouth, { toValue: 150, duration: 500, }),
        Animated.timing(this.state.avaTop, { toValue: 250, duration: 1000}),
        Animated.timing(this.state.avaOpacity, { toValue: 0, duration: 500}),
        Animated.timing(this.state.monMouth, { toValue: 1, duration: 500,}),
        Animated.timing(this.state.gameOverMove, {toValue:0, duration: 1000,}),
        Animated.timing(this.state.gameOverMove, {toValue:400, duration: 1000,})
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
                score: this.state.score + 1,
                difficultyWords: this.state.difficultyWords + 1
            });



        } else if (userInput.length >= curr.length) {

            this._nextWords();

            this.setState({
                typedWord: '',
                badScore: this.state.badScore + 1
            });


        }
    }


    componentDidMount() {
  
        itemsRef.ref.on('value', (snapshot) => {
          const userObj = snapshot.val();
          // this.name = userObj.name;
          // this.avatar = userObj.avatar;
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({items});
            console.log(this.state.items)
        });
    }

    _renderSeparator(sectionID,rowID){
        return (
            <View style={styles.separatorLine} key={"sectionID_"+sectionID+"_rowID_"+rowID}></View>
        );
    }


    // setObjIdState = () => {
    //     console.log("params is ", this.state.params.objectId)
    // }
    handleSubmit() {
        this.setState({ visible: true });
        updateItem(this.state.params.objectId, this.state.score);
        console.log('this.state.params.objectId', this.state.params.objectId);

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

        <Image 
        source={{uri: 'https://png2.kisspng.com/sh/02a42433de43fde63ca1bc11ba29dde4/L0KzQYm3UsA2N6pnj5H0aYP2gLBuTgJweJYyfedsbHnndbL1TgZma6V0ip9tcnH6ebBuTgJweJYyTdMCOULmSIHrWPZiamIzT6MBNkS4R4a4VcE4QGo1TqoDOEi7SHB3jvc=/kisspng-rope-euclidean-vector-drawing-rope-5a792c80d8fab1.7166457515178906888888.png'}}
        style={styles.rope}
        />
        <Animated.Image 
          source={{uri: someImage}}
          style={[styles.avatar, {opacity: this.state.avaOpacity, top: this.state.avaTop, left:this.state.avaSide}]}>
        </Animated.Image>

        <Animated.View style={[styles.greyScreen,{left: this.state.gameOverMove}]}>
        <Animated.Image 
        source={gameOver}
        style={styles.gameOver}>
        </Animated.Image>
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
          autoCorrect={false}
          spellCheck={false}
          autoComplete={false}
        />


        <View style={styles.button}>
          <Button
            onPress={() => { this._nextWords(); this.runAnimation();}}
            title="Start game!"
            color="#a0a0a0"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>


        <View style = {{top: 330}}> 
            <Button
                title="Show Scoreboard"
            
                onPress= {this.handleSubmit}
              />
              <Dialog
                visible={this.state.visible}
                onTouchOutside={() => {
                  this.setState({ visible: false });
                }}
                dialogStyle={{height: height-140, width: width- 20, backgroundColor: '#d1cfce'}}
              >
                <DialogContent>
                  <Text style = {{ textAlign: 'center', fontSize: 25, margin: 20}}> SCOREBOARD </Text>

                    <ScrollView style = {{borderRadius: 5, borderWidth: 2, borderColor: 'black', marginTop: 10, marginBottom: 10}}>
                      {

                        this.state.items.map((l, i) => (
                       
                          <ListItem
                            key = {i}
                            leftAvatar={{ source: { uri: l.avatar} }}
                            title={l.name}
                            subtitle= {l.score}
                          /> 
                      
                        ))

                      }
                    </ScrollView>
                  
                     
                </DialogContent>
              </Dialog>
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
        width:270,
        borderRadius: 50,
        backgroundColor: "#B61F24",
        bottom:-20,
        left:40,

        
    },
    eyeLeft: {
        position: 'relative',
        top:15,
        left: 90,
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
        left: 50,
        width:180,
        borderRadius: 150,
        backgroundColor: '#333',
        zIndex:11,
        overflow: 'hidden',
    },
    tooth1: {
        position:'relative',
        top:-10,
        left:62,
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
        left:90,
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
        left:-35,
        borderRadius: 50,
        width:60,
        height:250,
        backgroundColor: '#B61F24',
        overflow:'hidden',
        transform: [{rotate: '340deg'}],
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
    },
    avatar: {
        position: 'absolute',
        width: 100,
        height:100,
        
    },
    rope: {
        position: 'absolute',
        width:100,
        height:50,
        left:130,
        transform: [{rotate: '90deg'}],
    },
    gameOver: {
        width:300,
        height:400,
        opacity:1,
        position: 'absolute',
        top: 25,
        left:25,
        resizeMode: 'contain',
    },
    greyScreen: {
        width:400,
        height:750,
        position:'absolute',
        left:400,
        backgroundColor: '#8aa3ad',
        opacity: 0.7,
    }
    

});