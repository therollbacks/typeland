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
import { Text, View, Platform, StyleSheet, ImageBackground, Button} from 'react-native';
import PropTypes from 'prop-types';
import TypingText from "./typingcomponent.js"



export default class TypingTextDef extends Component
{
   constructor(props)
    {
        super(props);
        this.state = { timePassed: false, opacity: 0}
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({ timePassed: true });
      }, 7000 );
    }
    render()
    {
        let imageBack = require("./back.jpg");
        const { timePassed } = this.state;

     
        return(
            <View>
                <ImageBackground source={imageBack} style={{width: '100%', height: '100%'}}>

                <View style = {{marginTop: 50, width: 300, left: 50, top: 55}}>
                  <TypingText
                        text = "TypeLand. Type good to prevent feeding the monster. Type bad will feed him. Monster is hungry. "
                    />
                </View>

                { timePassed && <View style = {styles.button}>
                    <Button onPress={() => this.props.navigation.navigate('Chomp')} color="white" title="Play"/>
                  </View>
                  }
                 
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
    left: 60,
    marginBottom: 30,
    width: 260,
    top: 300,
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 5,
    borderRadius: 10,
    color: 'white'
  },

  button2: {
    position: 'absolute', 
    left: 60,
    marginBottom: 30,
    width: 260,
    top: 370,
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 5,
    borderRadius: 10,
    color: 'white'

  },

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
  color: "black",
  textWeight: 'bold',
  textSize: 30,
  typingAnimationDuration: 50,
  blinkingCursorAnimationDuration: 190
}