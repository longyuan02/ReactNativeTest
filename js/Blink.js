import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View ,XMLHttpRequest } from 'react-native';
//闪烁字 <Blink text="闪烁字">闪烁字</Blink>
export default class Blink extends Component {
 constructor(props) {
   super(props);
   this.state = { isShowingText: true };
   // 每1000毫秒对showText状态做一次取反操作
   setInterval(() => {
     this.setState(previousState => {//每次调用setState时，BlinkApp 都会重新执行 render 方法重新渲染
       return { isShowingText: !previousState.isShowingText };//previousState 是this.state传入的值
     });
//      this.setState({showText: !this.state.showText});//等价表达
   }, 1000);
 }

 render() {
   // 根据当前showText的值决定是否显示text内容
   if (!this.state.isShowingText) {
     return null;
   }

   return (
     <Text>{this.props.text}</Text>
   );
 }
}

//输入字符显示pizza
class PizzaTranslator extends Component {
 constructor(props) {//第一步构建构造函数
   super(props);
   this.state = {text: ''};//第二部设置及参数state
 }
 render() {
   return (
     <View style={{padding: 10}}>
       <TextInput
         style={{height: 40}}
         placeholder="Type here to translate!"
         onChangeText={(text) => this.setState({text})}
       />
       <Text style={{padding: 10, fontSize: 42}}>
         {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
       </Text>
     </View>
   );
 }
}
// //闪烁字
// export default class Blink extends Component {
//     constructor(props) {
//       super(props);
//       this.state = { isShowingText: true };
//       // 每1000毫秒对showText状态做一次取反操作
//       setInterval(() => {
//         this.setState(previousState => {//每次调用setState时，BlinkApp 都会重新执行 render 方法重新渲染
//           return { isShowingText: !previousState.isShowingText };//previousState 是this.state传入的值
//         });
//    //      this.setState({showText: !this.state.showText});//等价表达
//       }, 1000);
//     }
   
//     render() {
//       // 根据当前showText的值决定是否显示text内容
//       if (!this.state.isShowingText) {
//         return null;
//       }
   
//       return (
//         <Text>{this.props.text}</Text>
//       );
//     }
//    }