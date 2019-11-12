/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {StyleSheet, Text, Image, Button, TextInput, View, Alert } from 'react-native';
// import { FlatList, ActivityIndicator, Text, View ,XMLHttpRequest } from 'react-native';
// import HelloWorldApp from './js/Flexbox.js';
// import FetchMovies from './js/first_fetch_movie.js'
// import Blink from './js/Blink.js'
// import ButtonBasics from './js/ButtonBasics.js'
// import PizzaTranslator from './js/PizzaTranslator.js'
// import CustomStyle from './js/styleTest.js'
// import FlexBoxTest from './js/FlexBoxTest.js'
// import TouchEvent from './js/touchevent.js'
// import FlatListT from './js/FlatListTest.js'
import SectionListTest from './js/SectionListTest.js'

export default class FetchExample extends React.Component {
  render(){
    return(
      <View style={{flex: 1, paddingTop:20}}>
        {/* <ButtonBasics>按钮</ButtonBasics> */}
        {/* <PizzaTranslator></PizzaTranslator> */}
        {/* <TouchEvent></TouchEvent> */}
        <SectionListTest></SectionListTest>
      </View>
    );
  }
}

//start******
//export default class HelloWorldApp extends Component {
     //  render() {
     //      return (
     //        <View style={{alignItems: 'center'}}>
     //          <Greeting name='Rexxar' />
     //          <Greeting name='Jaina' />
     //          <Greeting name='Valeera' />
     //          <Banana />
     //          <Blink text="闪烁字"/>
     //          <PizzaTranslator />
     //          <Button
     //          onPress={()=>{
     //          Alert.alert('click');
     //          }}
     //          title='finishClick'
     //          />
     //        </View>
     //      );
     //    }
     //}
     //
     //const styles = StyleSheet.create({
     //  container: {
     //    flex: 1,
     //    flexDirection: 'row',
     //    justifyContent: 'space-between',
     //    alignItems: 'baseline',
     //    backgroundColor: '#F5FCFF',
     //  },
     //  red: {
     //      width: 50,
     //      backgroundColor: 'red'
     //  },
     //  blue: {
     //      width: 50,
     //      backgroundColor: 'blue'
     //  },
     //  orange: {
     //      width: 50,
     //      backgroundColor: 'orange'
     //  }
     //});
     //******end
//

