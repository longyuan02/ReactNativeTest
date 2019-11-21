/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {StyleSheet, Text, Image, Button, TextInput, View, Alert,NativeModules } from 'react-native';
// import { FlatList, ActivityIndicator, Text, View ,XMLHttpRequest } from 'react-native';
import HelloWorldApp from './js/Flexbox.js';
import ToastExample from './js/ToastExample'
// import FetchMovies from './js/first_fetch_movie.js'
// import Blink from './js/Blink.js'
// import ButtonBasics from './js/ButtonBasics.js'
// import PizzaTranslator from './js/PizzaTranslator.js'
// import CustomStyle from './js/styleTest.js'
// import FlexBoxTest from './js/FlexBoxTest.js'
// import TouchEvent from './js/touchevent.js'
// import FlatListT from './js/FlatListTest.js'
// import SectionListTest from './js/SectionListTest.js'
// import HomeTitle from './js/HomeTitle.js'
// 原生组件
// import MouldeToast from './js/ToastExample.js'
//imageUI组件
// import Native_Image from './js/Native_Image.js'
// import ViewC from './js/ViewC.js'//订票样式
import TextC from './js/Text_numberOfLine.js'
// import ImageTest from './js/image.js'
// import AppRegistry from './js/AppRegistryD.js'
export default class FetchExample extends React.Component {
  render(){
    return(
      <View style={{flex: 1, paddingTop:20}}>
        {/* <AppRegistry></AppRegistry> */}
        <TextC></TextC>
        {/* <HelloWorldApp></HelloWorldApp> */}
        {/* <Native_Image 
          style={{width: 50, height: 50, backgroundColor: 'powderblue'}}
          imageName={ "" } 
        /> */}
        {/* <ButtonBasics>按钮</ButtonBasics> */}
        {/* <PizzaTranslator></PizzaTranslator> */}
        {/* <TouchEvent></TouchEvent> */}
        {/* <HomeTitle></HomeTitle> */}
        {/* <ImageTest></ImageTest> */}
      </View>
    );
}
componentDidMount(){
  // ToastExample.show("test===",1000);
}
}


