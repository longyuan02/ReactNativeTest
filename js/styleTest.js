import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default  class Styless extends Component {
    render(){
        return(<View style={{flex: 1}}>
             <Text>Loading movies...</Text>
            <Text style={styles.bigBlue}>bigBlue</Text>
            <Text style={styles.red}>red></Text>
            <Text style={styles.bigBlue}>bigBlue></Text>
            <Text style={styles.red}>red></Text>
        </View>);
        
    }
}
const styles = StyleSheet.create({
    bigBlue:{
    flex:1,
    color:"#FF00FF",
    fontWeight:'bold',
    fontSize:22,
    backgroundColor:'skyblue'
},
    red:{
        flex:2,
        color:'#00FFFF',
        backgroundColor:'powderblue'
    }
});