// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// import MainComponent from "./components/maincomponent"


// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//       <MainComponent/>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import { Root } from "native-base";
// import { StyleSheet, Text, View, Button } from 'react-native';
// import { Font, AppLoading } from "expo";

// import MainComponent from "./components/maincomponent"

// import AppNavigator from './components/AppNavigator';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//      this.state = { loading: true };
//   }



//    async componentWillMount() {
//     await Font.loadAsync({
//       Roboto: require("native-base/Fonts/Roboto.ttf"),
//       Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
//     });
//     this.setState({ loading: false });
//   }




//   render() {
//     if (this.state.loading) {
//       return (
//         <Root>
//           <AppLoading />
//         </Root>
//       );
//     }
//     return (
//       <Root>
//         <MainComponent />
//       </Root>
//     );
//   }
// }



import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

import MainComponent from "./components/maincomponent"
import ChompComponent from "./components/chompcomponent"

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
        
//         {/* Look here! We "push" the Details route */}
        
//         <Button
//           title="Go to Details... again"
//           onPress={() => this.props.navigation.push('Details')}
//         />
//       </View>
//     );
//   }
// }

const RootStack = createStackNavigator(
  {
    Home: ChompComponent,
    Details: MainComponent,
  },
  {
    initialRouteName: 'Details',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
