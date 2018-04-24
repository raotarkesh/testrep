/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Alert,
} from 'react-native';
var Parse = require('parse/react-native');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  componentDidMount() {
    Parse.serverURL = 'https://api.parse.buddy.com/parse/';
    Parse.setAsyncStorage(AsyncStorage);
    Parse.initialize("c0f42a77-1ddc-4e25-9f3d-e0e010ac66dd");

    var pt = Parse.Object.extend("PerfTesting");
    var query = new Parse.Query(pt);
    query.find().then(function(results) {
      Alert.alert(JSON.stringify(results));
    });
         
  }
//  componentWillMount(){
//   alert("kkk")
// var user = new Parse.User();
// user.set("username", "my name");
// user.set("password", "my pass");
// user.set("email", "email@example.com");

// // other fields can be set just like with Parse.Object
// user.set("phone", "415-392-0202");

// user.signUp(null, {
//   success: function(user) {
//    alert("success")
//   },
//   error: function(user, error) {
//     // Show the error message somewhere and let the user try again.
//     alert("Error: " + error.code + " " + error.message);
//   }
// });

// }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
