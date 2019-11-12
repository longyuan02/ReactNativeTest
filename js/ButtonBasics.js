import React,{Component} from 'react'
import {View,Button,Alert,StyleSheet} from 'react-native'

export default class ButtonBasics extends Component {
 _onPressButton() {//定义组件内复用点击事件
   Alert.alert('You tapped the button!')
 }
 onclickButton(){
 Alert.alert('click_again_to_again');
 }

 render() {
   return (
     <View style={styles.container}>
       <View style={styles.buttonContainer}>
         <Button
           onPress={this._onPressButton}
           title="Press Me"
         />
       </View>
       <View style={styles.buttonContainer}>
         <Button
           onPress={this.onclickButton}
           title="Press Me"
           color="#841584"
         />
       </View>
       <View style={styles.alternativeLayoutButtonContainer}>
         <Button
           onPress={this._onPressButton}
           title="This looks great!"
         />
         <Button
           onPress={this._onPressButton}
           title="OK!"
           color="#841584"
         />
       </View>
     </View>
   );
 }
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
 },
 buttonContainer: {
   margin: 20
 },
 alternativeLayoutButtonContainer: {
   margin: 20,
   flexDirection: 'row',
   justifyContent: 'space-between'
 }
})