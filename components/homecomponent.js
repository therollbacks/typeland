// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import { Root } from "native-base";
// import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ImageBackground} from 'react-native';
// import { Font, AppLoading } from "expo";
// import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
// import ChompComponent from "./chompcomponent"
// import Typing from 'react-typing-animation';
 


// export default class HomeComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }



//   _onPressButton() {
//     console.log('You tapped the button!')
//   }

//     render() {
//       let imageBack = require("./back.jpg");
    
//     return (
//       <View >
//        <ImageBackground source={imageBack} style={{width: '100%', height: '100%'}}>

//         <Text style = {styles.openText}> TypeLand </Text>
//           <View style = {styles.button}>
//             <Button onPress={() => this.props.navigation.navigate('Chomp')} color="white" title="Play"/>
//           </View>
//           <View style = {styles.button2}>
//             <Button onPress={() => this.props.navigation.navigate('Details')} color="white" title="How to play"/>
//           </View>
//         </ImageBackground>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   openText: {
//     fontSize: 55,
//     fontWeight: 'bold',
//     position: 'absolute', 
//     top: 160,
//     left: 49,
//     color: '#351431'
//   },

  //  button: {
  //   position: 'absolute', 
  //   left: 60,
  //   marginBottom: 30,
  //   width: 260,
  //   top: 300,
  //   alignItems: 'center',
  //   borderColor: 'white',
  //   borderWidth: 5,
  //   borderRadius: 10,
  //   color: 'white'
  // },

  // button2: {
  //   position: 'absolute', 
  //   left: 60,
  //   marginBottom: 30,
  //   width: 260,
  //   top: 370,
  //   alignItems: 'center',
  //   borderColor: 'white',
  //   borderWidth: 5,
  //   borderRadius: 10,
  //   color: 'white'

  // },

//   buttonText: {
//     padding: 20,
//     color: 'white'
//   }
// });

import React, { Component } from 'react';
import { Text, View, StatusBar, Platform, StyleSheet, ImageBackground, Button, Overlay, Dimensions, KeyboardAvoidingView} from 'react-native';
import PropTypes from 'prop-types';
import TypingText from "./typingcomponent.js"
import FloatingLabelInput from './namecomponent.js'
var FloatingLabel = require('react-native-floating-labels');


let height =  Dimensions.get('window').height
let width=  Dimensions.get('window').width




export default class TypingTextDef extends Component
{

    onBlur() {
      console.log('#####: onBlur');
    }
 
   constructor(props)
    {
        super(props);
        this.state = { timePassed: false, butOpacity: 1, barOpacity: 0, isVisible: true, curHeight: height/2 - 180,  dirty: false }
    }

    _getUserName = () => {
      console.log("pressed play")
      this.setState({
        curHeight: 20,
        butOpacity: 0,
        barOpacity: 1
      });


    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({ timePassed: true });
      }, 2000 );


    }

    handleTextChange = (newText) => this.setState({ value: newText });

    render()
    {
        let imageBack = require("./back.jpg");
        const { timePassed } = this.state;

     
        return(
            <View>
                <ImageBackground source={imageBack} style={{width: '100%', height: '100%'}}>
                  <View style = {styles.overlay}>

                    <View style = {{top: this.state.curHeight}}>
                      <View style = {{marginTop: 50, marginLeft: 28, marginRight: 28}}>
                        <TypingText
                              text = "TypeLand. Type good to prevent feeding bubba. Type bad will feed bubba. Bubba is hungry. "
                          />
                      </View>

                      { timePassed && <View style = {[styles.button, {opacity: this.state.butOpacity}]}>
                          <Button onPress={this._getUserName}  color="#d41302" title="Play"/>
                        </View>
                        }
                      </View>
                      <KeyboardAvoidingView style = {{ marginTop: 100, opacity: this.state.barOpacity, width: width/1.3, left: width/10}} behavior="padding" enabled>
                        <FloatingLabel 
                          labelStyle={styles.labelInput}
                          inputStyle={styles.input}
                          style={styles.formInput}
                          onBlur={this.onBlur}
                        >Name</FloatingLabel>
                        </KeyboardAvoidingView>
                    
                      
                    
                    </View>
                 
                </ImageBackground>
            </View>
        );
    }
}
 
const styles = StyleSheet.create(
{
    container:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: 'black',
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },

  button: {
    position: 'absolute', 
    left: width/4,
    marginBottom: 30,
    width: 170,
    top: 240,
    alignItems: 'center',
    borderColor: '#d41302',
    borderWidth: 5,
    borderRadius: 10,
    color: '#d41302'
  },

  labelInput: {
    color: 'white',      
  },
  formInput: {    
    borderBottomWidth: 1.5, 
    marginLeft: 20,
    borderColor: '#333', 
  },
  input: {
    borderWidth: 0,
    color: 'white',      

  },
  button2: {
    position: 'absolute', 
    left: 60,
    marginBottom: 50,
    width: 260,
    top: 370,
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 5,
    borderRadius: 10,
    color: 'white'

  },

  overlay:{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.85)'
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
  textWeight: 'bold',
  textSize: 30,
  typingAnimationDuration: 30,
  blinkingCursorAnimationDuration: 190
}