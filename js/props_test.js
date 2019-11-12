
import React,{Component} from 'react'
import {View,Text} from 'react-native'

//自定义控件并通过props改变内容
export default class Greeting extends Component {
 render() {
   return (
     <View>
       <Text>Hello {this.props.name}!</Text>
     </View>
   );
 }
}

// export default class Banana extends Component{
// render(){
// let pic={
//        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
// }
// return(
// <View>
//        <Image source={pic} style={{width:100,height:100}}/>
//        </View>
// );
// }
// }