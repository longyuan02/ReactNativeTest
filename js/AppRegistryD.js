import React,{Component} from 'react';
import {View,Text,AppRegistry,TouchableOpacity} from 'react-native';
export default class Demo extends Component{
    _onPress(){
        AppRegistry.registerRunnable('hello',(p)=>console.info('print-->r'));
        AppRegistry.runApplication('hello',['wold']);
    }
    render(){
        return(<View>
            <TouchableOpacity style={{margin:30}} 
                onPress={this._onPress}>
                <Text>AppRegistry</Text>
            </TouchableOpacity>
        </View>);
    }
}