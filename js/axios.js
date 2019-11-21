import React, {
    Component
} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    FlatList
} from 'react-native';
var REQUEST_URL="https://cms-uat.gomegold.com/banner/bannerListPage/";//post 功能入口

export default class axiosTest extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        loaded: false,
         // 下拉刷新
         isRefresh:false,
         // 加载更多
         isLoadMore:false,
          //当前页
      };
      // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
      // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
         this.fetchData = this.fetchData.bind(this);
    }
    componentDidMount() {
      this.fetchData();
    }
    fetchData() {
        axios({
            method: 'post',
            url: REQUEST_URL,
            data: {
                keyWord:"HOME_GONGNENG",
                version:'3.2.3'
            }
          }).then(function (response) {
            console.log(response);
         })
        .catch(function (error) {
        // handle error
        console.log(error);
            })
.then(function () {
  // always executed
});
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