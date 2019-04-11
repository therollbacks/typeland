import React, { Component } from 'react';
import {Alert, StyleSheet, AsyncStorage, Text, View, TextInput, Button, TouchableHighlight, Image, Dimensions, ImageBackground} from 'react-native';
import PropTypes from 'prop-types';
import TypingText from "./typingcomponent.js"
import FloatingLabelInput from './namecomponent.js'
var FloatingLabel = require('react-native-floating-labels');
import { Avatar } from 'react-native-elements';
import {addItem} from '../service/MyServiceInterface';

let height =  Dimensions.get('window').height
let width=  Dimensions.get('window').width


export default class HomeView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movePlay: 1500,
      name  : '',
      password: '',  
      timePassed: false, 
      butOpacity: 1, 
      barOpacity: 0, 
      isVisible: true, 
      curHeight: height/2 - 180, 
      loginHeight: height/2 + 240, 
      dirty: false, 
      username: '', 
      image : '',
      uri:'https://d2d00szk9na1qq.cloudfront.net/Product/8c8a442f-238a-4644-afc4-d46ef7778b5d/Images/Large_RFR-005.jpg',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.nativeEvent.text
    });
  }
  
  handleSubmit() {
    console.log("handling submit")
    console.log(this.state.name)
    console.log(this.state.uri)
    addItem(this.state.name, this.state.uri);
    Alert.alert("item saved successfully");
    this.props.navigation.navigate('Chomp', {
      someImage: this.state.image
    });

  }


  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }


   onBlur() {
      console.log('#####: onBlur');
    }
 
    _getUserName = () => {
      console.log("pressed play")
      this.setState({
        curHeight: 110,
        butOpacity: 0,
        barOpacity: 1,
        loginHeight: 70
      });
    }

    _changeName = (userinput) => {
        this.setState({name: userinput, movePlay: 0})

    }

    btnToChomp () {
      console.log('btnToChomp');
      this.handleSubmit;
      this.props.navigation.navigate('Chomp');
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({ timePassed: true });
      }, 2000 );
    }

    handleTextChange = (newText) => this.setState({ value: newText });

  render() {

    let imageBack = require("./back3.png");
    const { timePassed } = this.state;

    return (
      <View style={styles.container}>
        <ImageBackground source={imageBack} style={{width: '100%', height: '100%', alignItems: 'center'}}>


          <View style = {{top: this.state.curHeight}}>
            <View style = {{ marginLeft: 28, marginRight: 28, marginBottom: 70}}>
              <TypingText text = "TypeLand. Type good to prevent feeding bubba. Type bad will feed bubba. Bubba is hungry. "/>
            </View>

            { timePassed && <View style = {[styles.button, {opacity: this.state.butOpacity}]}>
              <Button onPress={this._getUserName}  color="#d41302" title="Start"/>
                            </View>
                        }
          </View>

          <View style = {{marginTop: 20, opacity: 1, width: width/1.3, left: width/16, top: this.state.loginHeight}}>

            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
              <TextInput style={styles.inputs}
                  placeholder="Name"
                  underlineColorAndroid='transparent'
                  onChangeText={name => this._changeName(name)}/>
            </View>
            
            <Text style = {{fontSize: 30, color:'#d41302', fontWeight: 'bold' }}> Pick an Avatar: </Text>
               <Avatar
                rounded
                source={{
                  uri: this.state.uri,
                }}
                size="medium"
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                containerStyle={{marginTop: 62, marginBottom: 30, marginRight: 40, position: 'absolute', left: 220}}  
               />


               <Avatar
                rounded
                source={{
                  uri:
                    'https://ya-webdesign.com/images/transparent-temmie-pixel-1.png',
                }}
                size="large"
                onPress={() => this.setState({
                  uri: 'https://ya-webdesign.com/images/transparent-temmie-pixel-1.png',
                  image: 'https://ya-webdesign.com/images/transparent-temmie-pixel-1.png'
                })}
                activeOpacity={0.7}
                containerStyle={{marginTop: 125, marginBottom: 30, marginRight: 40, position: 'absolute', left: -30}}

               />

              
                <Avatar
                  rounded
                  source={{
                    uri:
                      'http://www.stickpng.com/assets/images/58a20c66c8dd3432c6fa8223.png',
                  }}
                  size="large"
                  onPress={() => this.setState({
                    uri: 'http://www.stickpng.com/assets/images/58a20c66c8dd3432c6fa8223.png',
                    image: 'http://www.stickpng.com/assets/images/58a20c66c8dd3432c6fa8223.png'
                  })}
                  activeOpacity={0.7}
                  containerStyle={{marginTop: 125,marginBottom: 30, marginRight: 40, position: 'absolute', left: width/2-  width/4 - 13 }}
              />

                 <Avatar
                  rounded
                  source={{
                    uri:
                      'http://pixelartmaker.com/art/717400a4542c897.png',
                  }}
                  size="large"
                  onPress={() => this.setState({
                      uri: 'http://pixelartmaker.com/art/717400a4542c897.png',
                      image: 'http://pixelartmaker.com/art/717400a4542c897.png'
                    })}
                  activeOpacity={0.7}
                  containerStyle={{marginTop: 125,marginBottom: 30, marginRight: 40, position: 'absolute', left: width/2  }}
                />

                <View style = {styles.button2, {top: this.state.movePlay}}>
                  <Button onPress={this.handleSubmit} color="#d41302" title="Play"/>
                </View>


          </View>
      </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1, 
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center',
  
  },

  button: {
    position: 'absolute', 
    left: width/4,
    marginBottom: 30,
    width: 170,
    top: 210,
    alignItems: 'center',
    borderColor: '#d41302',
    borderWidth: 5,
    borderRadius: 10,
    color: '#d41302'
  },

   button2: {
    position: 'absolute', 
    marginBottom: 30,
    left: '12.5%',
    width: 170,
    marginTop: 220,
    alignItems: 'center',
    borderColor: '#d41302',
    borderWidth: 5,
    borderRadius: 10,
    color: '#d41302'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,

  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});


TypingText.propTypes =
{
  text: PropTypes.string,
  color: PropTypes.string,
  textSize: PropTypes.number,
  typingAnimationDuration: PropTypes.number,
  blinkingCursorAnimationDuration: PropTypes.number
}
 
TypingText.defaultProps =
{
  text: "Default Typing Animated Text.",
  color: "#d41302",
  fontWeight: 'bold',
  textSize: 30,
  typingAnimationDuration: 50,
  blinkingCursorAnimationDuration: 190
}