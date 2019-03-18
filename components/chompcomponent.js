import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Root } from "native-base";
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Font, AppLoading } from "expo";
import { createStackNavigator } from 'react-navigation';

export default class ChompComponent extends React.Component {
  // constructor(props) {
  //   super(props);
  //    this.state = { loading: true };
    

  // }


  // _onPressButton() {
  //   Alert.alert('You tapped the button!')
  // }

  // render() {
    
  //   return (
  //     <View>
  //     <Text style = {styles.openText}> Main </Text>
  //     </View> 
  //   );
  // }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Chomp Screen</Text>
        
        {/* Look here! We "push" the Details route */}
        
        <Button
          title="Exit"
          onPress={() => this.props.navigation.push('Details')}
        />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  openText: {
    fontSize: 30,
    fontWeight: 'bold',
    position: 'absolute', 
    top: 200,
    left: 120

 
  },

});