import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Image, Alert, Dimensions, ImageBackground} from 'react-native';
import PropTypes from 'prop-types';
import TypingText from "./typingcomponent.js"
import FloatingLabelInput from './namecomponent.js'
var FloatingLabel = require('react-native-floating-labels');

let height =  Dimensions.get('window').height
let width=  Dimensions.get('window').width


export default class LoginView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name  : '',
      password: '',  timePassed: false, butOpacity: 1, barOpacity: 0, isVisible: true, curHeight: height/2 - 180, loginHeight: height/2 - 100,  dirty: false, username: '',
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
        curHeight: 10,
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
        <ImageBackground source={imageBack} style={{width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center', }}>


          <View style = {{top: this.state.curHeight}}>
            <View style = {{ marginLeft: 28, marginRight: 28}}>
              <TypingText text = "TypeLand. Type good to prevent feeding bubba. Type bad will feed bubba. Bubba is hungry. "/>
            </View>

            { timePassed && <View style = {[styles.button, {opacity: this.state.butOpacity}]}>
              <Button onPress={this._getUserName}  color="#d41302" title="Start"/>
                            </View>
                        }
          </View>


          <View style = {{marginTop: 20, opacity: this.state.barOpacity, width: width/1.3, left: width/16, top: this.state.loginHeight}}>

            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
              <TextInput style={styles.inputs}
                  placeholder="Name"
                  underlineColorAndroid='transparent'
                  onChangeText={(name) => this.setState({name})}/>
            </View>
            
            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
              <TextInput style={styles.inputs}
                  placeholder="Password"
                  secureTextEntry={true}
                  underlineColorAndroid='transparent'
                  onChangeText={(password) => this.setState({password})}/>
            </View>

            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('Chomp')}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonContainer} onPress={() =>this.props.navigation.navigate('Signup')}>
                <Text style = {{color: 'white'}}>Register</Text>
            </TouchableHighlight>

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