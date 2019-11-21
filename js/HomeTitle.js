import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  FlatList
} from 'react-native';
// const REQUEST_URL = "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";
// var REQUEST_URL="https://cms-uat.gomegold.com/mall/v2/queryMoudleList?channelId=23&page=index_v2&platform=gold.app";//首页模块
var REQUEST_URL="https://cms-uat.gomegold.com/banner/bannerListPage";//post 功能入口
var Params="keyWord=HOME_GONGNENG&version=3.2.3";
/**
 * keyWord:"HOME_GONGNENG",
    //       version:'3.2.3'
 */
export default class HomeTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
    };
    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
       this.testPost = this.testPost.bind(this);
  }
  componentDidMount() {
    this.testPost();
  }

//   fetchData() {
//     // fetch(REQUEST_URL, {
//     //   method: 'post',
//     //   headers: {
//     //     'Accept': 'application/json',
//     //     'Content-Type': 'application/octet-stream', //数据格式 json或者key-value形式
//     //   },
//     //   body:JSON.stringify({
//     //       keyWord:"HOME_GONGNENG",
//     //       version:'3.2.3'
//     //     })
//     // })
//   // 请求参数 ('key',value)
//   var formData = new FormData();
//   formData.append('keyWord', "HOME_GONGNENG");
//   formData.append('version','3.2.3');
// var Params="keyWord=HOME_GONGNENG&version=3.2.3";
//     fetch(REQUEST_URL,
//     {
//       method:"POST",   //请求方法
//   // 　　 headers: {
//   // 　　　　 'Accept': 'application/json',
//   // 　　　　 'Content-Type': 'application/json',
//   // 　　　　 },
//         body:this.formData,   //请求体
//   }
//     ).then(response => response.json())
//       .then(responseData => {
//         // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
//         //setState会触发一次重新渲染流程
//         alert(JSON.stringify(responseData))
//         // this.setState({
//         //   data: this.state.data.concat(responseData.movies),
//         //   loaded: true
//         // });
//       }).catch((error) => {
//         console.error(error);
//       });
//   }

  testPost(){
            let myData = new FormData();
            myData.append('keyWord', "HOME_GONGNENG");
            myData.append('version','3.2.3');
            fetch(REQUEST_URL,{
                method: "POST",
                mode: "cors",
                headers: {
                    // 'Accept' : 'application/json',
    //                 'Content-Type': 'multipart/form-data;charset=UTF-8'
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body:'keyWord=HOME_GONGNENG&version=3.2.3',
            }).then((response) => response.json())
                .then((responseData) =>{
                alert(JSON.stringify(responseData))
                    console.log("aaa")
                }).done()
        }
  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderMovie}
        style={styles.list}
        keyExtractor={item => item.id}
        horizontal={true}
        initialNumToRender={7}
      />
    );
  }
  _createListHeader(){
        <FlatList 
        data={this.setState.data}
        renderItem={(item=> <Text></Text>)}></FlatList>
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>Loading movies...</Text>
      </View>
    );
  }

  renderMovie({ item }) {
    // { item }是一种“解构”写法，请阅读ES2015语法的相关文档
    // item也是FlatList中固定的参数名，请阅读FlatList的相关文档
    return (
      <View style={styles.container}>
            <Image
                source={{ uri: item.posters.thumbnail }}
                style={styles.thumbnail}
            />
            <View style={styles.rightContainer}>
                 <Text style={styles.title}>{item.title}</Text>
            </View>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
      height:50,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 8,
    marginBottom: 2,
    width:40,
    textAlign: "center"
  },
  year: {
    textAlign: "center"
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  list: {
    paddingTop: 20,
    backgroundColor: "#F5FCFF"
  }
});