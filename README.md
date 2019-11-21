[TOC]
### 对比问题
[RN常问知识点](https://blog.csdn.net/qq_33323251/article/details/80014166)
### 执行
1. cd 工程目录
2. react-native run-android 

### state 闪烁字
[setState链接](https://reactjs.org/docs/react-component.html#setstate);
1. 文件位置 js/Blink
    import Blink from './js/Blink.js'
2. 注意知识点
    1. 一切界面状态变化都是state变化
    2. state 变化必须通过setState来设置
    this.state.like=100;//无效
    setState是merge合并操作,只修改指定属性,不影响其他属性
    setState 是异步修改,不会马上生效
### 网路请求 
1. 文件位置 js/first_fetch_movie
    import FetchMovies from './js/first_fetch_movie.js'

### 自定义Button
1. 文件位置 js/ButtonBasics
    import ButtonBasics from './js/ButtonBasics.js'


### 输入显示图片 inputText控件使用
1. 文件位置 js/PizzaTranslator
    import PizzaTranslator from './js/PizzaTranslator.js'
### 层级数据显示
1. 文件位置 js/SectionListTest.js
    import PizzaTranslator from './js/SectionListTest.js'

### 列表FlatList 带有分组标签
1. 文件位置 js/FlatListTest.js
    import PizzaTranslator from './js/FlatListTest.js'

### 原生模块
1. Java文件
    管理类  CustomToastPackage 实现接口ReactPackage
    原生类  ToastModule-->getName获取模块名,必须重写|| 自定义方法实现-->ReactMethod注解
### ViewC 分层布局
    

### AppRegistryD 打印输出信息
<pre><code> AppRegistry.registerRunnable('hello',(p)=>console.info('print-->r'));
            AppRegistry.runApplication('hello',['wold']);</code></pre>



[地址](https://github.com/longyuan02/ReactNativeTest.git)