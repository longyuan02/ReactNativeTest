import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
const mss="";
export default class TextC extends Component{
    _onLayout(event){
        //{nativeEvent: {layout: {x, y, width, height}}}
        var msg= 'width:'+event.nativeEvent.layout.width+'\n';
        msg+= 'height:'+event.nativeEvent.layout.height+'\n';
        msg+= 'x:'+event.nativeEvent.layout.x+'\n';
        msg+='y'+event.nativeEvent.layout.y+'\n';
        alert(msg);
    }
    _onPress(){
        alert(this.mss+"输出");
    }
render(){
    return(<View>
        <Text style={[styles.baseText]} numberOfLines={2}>TypeError: instance.render is not a function. (In 'instance.render()', 'instance.render' is undefined)</Text>
        {/* <Text style={[styles.baseText,{height:40,width:100}]} onLayout={this._onLayout} onPress={this._onPress}>onlayout</Text> */}
       
       {/* <TextInput autoCapitalize='words' style={{width:100,height:40,borderColor: 'gray'}}>sdssd</TextInput> */}
       <View style={{backgroundColor:'#FFF00'}}>
       <TextInput  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} autoCapitalize='words'/>
       </View>
       <View style={{backgroundColor:'#FFF00'}}>
       <TextInput autoCapitalize='words'></TextInput>
       </View>
    </View>);
}
}
const styles=StyleSheet.create({
    baseText:{
        fontFamily:'Cochin',
        margin:30,
        backgroundColor:'#F00'
    }
});