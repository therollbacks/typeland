import React, { Component } from 'react';
import {StyleSheet, AsyncStorage, Text, View, TextInput, Button, TouchableHighlight, Image, Alert, Dimensions, ImageBackground} from 'react-native';
import PropTypes from 'prop-types';
import TypingText from "./typingcomponent.js"
import FloatingLabelInput from './namecomponent.js'
var FloatingLabel = require('react-native-floating-labels');
import { Avatar } from 'react-native-elements';

let height =  Dimensions.get('window').height
let width=  Dimensions.get('window').width


export default class LoginView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name  : '',
      password: '',  timePassed: false, butOpacity: 1, barOpacity: 0, isVisible: true, curHeight: height/2 - 180, loginHeight: height/2 + 240,  dirty: false, username: '',
    }
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
                  onChangeText={(name) => this.setState({name})}/>
            </View>
            
            <Text style = {{fontSize: 30, color:'#d41302', fontWeight: 'bold' }}> Pick an Avatar </Text>
               <Avatar
                rounded
                source={{
                  uri:
                    'https://i.pinimg.com/originals/93/c0/ed/93c0ed59f9a1afb95eb37a1274160bf4.png',
                }}
                size="large"
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                  containerStyle={{marginTop: 145, marginBottom: 30, marginRight: 40, position: 'absolute', left: -30}}

               />

              
                <Avatar
                  rounded
                  source={{
                    uri:
                      'https://i.pinimg.com/originals/08/97/f6/0897f6353b2469da4b9501462d9c08aa.gif',
                  }}
                  size="large"
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.7}
                  containerStyle={{marginTop: 145,marginBottom: 30, marginRight: 40, position: 'absolute', left: width/2-  width/4 - 13 }}
              />

                 <Avatar
                  rounded
                  source={{
                    uri:
                      'https://cdn.shopify.com/s/files/1/0822/1983/articles/undertale-monster-kid-pixel-art-pixel-art-undertale-monster-kid-monster-pixel-8bit.png?v=1501253423',
                  }}
                  size="large"
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.7}
                  containerStyle={{marginTop: 145,marginBottom: 30, marginRight: 40, position: 'absolute', left: width/2  }}

                />

                  <Button onPress={() =>this.props.navigation.navigate('Chomp')}  color="#d41302" title="Play"/>

          


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