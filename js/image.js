import React,{Component} from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
export default class ImageTest extends Component{
    render(){
        return(
            <View>
                <Image source={require('./imgs/un_buy_back.png')} />
            </View>
        );
    }
}