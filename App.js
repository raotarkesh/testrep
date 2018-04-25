import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  Alert,
} from 'react-native';

var Parse = require('parse/react-native');

type Props = {};

export default class App extends Component<Props> {

  componentWillMount() {
    Parse.serverURL = 'https://api.parse.buddy.com/parse/';
    Parse.setAsyncStorage(AsyncStorage);
    Parse.initialize("c0f42a77-1ddc-4e25-9f3d-e0e010ac66dd");  
    }

  enter(){
    var user = new Parse.User();
    user.set("username", "my name");
    user.set("password", "my pass");
    user.set("email", "email@example.com");
    user.set("phone", "415-392-0202");
    user.signUp(null, {
      success: function(user) {
        alert("success")
       },
        error: function(user, error) {
       alert("Error: " + error.code + " " + error.message);
       }
    });
   }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <TouchableOpacity style={{borderColor:'grey',height:45,width:130,borderRadius:8,borderWidth:2,marginTop: 30,alignItems:'center',justifyContent:'center'}} onPress={this.enter.bind(this)}>
        <Text style={{fontSize: 20,fontWeight: 'bold'}}>Enter</Text>
        </TouchableOpacity>
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
});
