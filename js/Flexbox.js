import React, { Component } from 'react';
import { Text, View } from 'react-native';
// import MouldeToast from './js/ToastExample.js'
export default class HelloWorldApp extends Component {
  render() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Hello, world!</Text>
          {/* <TouchableOpacity onPress={ToastExample.show("Awesome", ToastExample.SHORT)}>                            
          <Text style={PackDetailsStyles.MainInfoItemTitle}>服务</Text>                               
          </TouchableOpacity> */}
        </View>
    );
  }
}