import React,{Component} from 'react';
import {View,Text,StyleSheet,PixelRatio} from 'react-native';
export default class ViewC extends Component{
    render(){
        return(<View>
                <View style={styles.container}>
                    <View style={[styles.item,styles.center]}>
                    <Text style={styles.text}>订票</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={[styles.center,{flex:1},styles.border_]}>
                        <Text style={styles.text}>飞机</Text>
                        </View>
                        <View style={[styles.center,{flex:1}]}>
                        <Text style={styles.text}>火车</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={[styles.center,{flex:1},styles.border_]}>
                        <Text style={styles.text}>轮船</Text>
                        </View>
                        <View style={[styles.center,{flex:1}]}>
                        <Text style={styles.text}>航天</Text>
                        </View>
                    </View>
                </View>
        </View>);
    };
}
const styles=StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:'red',
        flexDirection:'row',
        marginTop:40,
        marginLeft:20,
        marginRight:20,
        marginBottom:40
    },
    item:{
        flex:1,
        flexDirection:'column',
        height:80,
        borderColor:'blue',
        justifyContent:'center',
        borderWidth:1
    },
    text:{
        fontSize:12,
        color:'#ff0000',
        textAlign:'center',
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    border_:{
            borderBottomWidth:1*PixelRatio.get(),
            borderBottomColor:"blue"
    }
});