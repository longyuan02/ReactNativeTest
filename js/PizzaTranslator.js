import React,{Component} from 'react'
import {TextInput,Text,View} from 'react-native'

//输入字符显示pizza
export default class PizzaTranslator extends Component {
 constructor(props) {//第一步构建构造函数
   super(props);
   this.state = {text: ''};//第二部设置及参数state
 }
  render(){//箭头函数(text)传入参数 setState({})//使用jsx传参数
    return(<View>
      <TextInput style={{height:40,}} placeholder="input word" onChangeText={(text)=>this.setState({text})}></TextInput>
      <Text style={{padding:10,fontSize:42}}>{this.state.text.split(' ').map((word)=>word&&'🍕').join(' ')}</Text>
    </View>);
  }




//  render() {
//    return (
//      <View style={{padding: 10}}>
//        <TextInput
//          style={{height: 40}}
//          placeholder="Type here to translate!"
//          onChangeText={(text) => this.setState({text})}
//        />
//        <Text style={{padding: 10, fontSize: 42}}>
//          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//        </Text>
//      </View>
//    );
//  }
}