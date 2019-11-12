import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default class FlexTest extends Component{
    render() {
        return(
            <View style={styles.constant}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={styles.child}>
                </View>
                <View style={{height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    };
}
var styles=StyleSheet.create({
    constant : {
        flex:1,
        flexDirection:'column',
        justifyContent:'space-around',
        backgroundColor:'#FFFF00',
        alignItems:'stretch',
    },
    child:{
        height: 50,
        backgroundColor: 'steelblue',
        alignSelf:'center'
    }
});