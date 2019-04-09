import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

import MainComponent from "./components/maincomponent"
import ChompComponent from "./components/chompcomponent"
// import HomeComponent from "./components/homecomponent"
import TypingTextDef from "./components/homecomponent"
import LoginView from "./components/testhomecomponent"
import SignupView from "./components/signupcomponent"


import HomeView from './view/testhomeview';
import ChompView from './view/chompview';

const RootStack = createStackNavigator(
  {

    Home: {
      screen: HomeView,
      navigationOptions: {
        title: 'home',
        header: null
      },
    },
    Chomp:  {
      screen: ChompView,
      navigationOptions: {
        title: 'chomp',
        header: null
      }
    },
    Signup:  {
      screen: SignupView,
      navigationOptions: {
        title: 'chomp',
        header: null
      }
    },
    Details: MainComponent,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


