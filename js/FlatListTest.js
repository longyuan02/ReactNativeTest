import React,{Component} from 'react';
import {View,StyleSheet,FlatList,Text} from 'react-native';
export default class FlatListT extends Component{
        render(){
            return(
                <View style={styleF.constaint}>
                    {/* <FlateList data={[
                        {key: 'Devin'},
                        {key: 'Dan'},
                        {key: 'Dominic'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ]}
                    renderItem={({item})=> <Text style={styleF.item}>{item.key}</Text>}/> */}
                    <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styleF.item}>{item.key}</Text>}
        />
                </View>
            );
        }
}
var styleF=StyleSheet.create({
    constaint:{
        flex:1,
        paddingTop:20
    },
    item:{
        paddingTop:20,
        fontSize:12,
        height:40
    }
});