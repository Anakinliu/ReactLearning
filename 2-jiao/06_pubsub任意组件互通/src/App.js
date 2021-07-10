import React, { Component } from 'react';
import './App.css';
import Search from './component/Search';
import ResultList from './component/Result';
export default class App extends Component {

    // state = {
    //     limit: false,
    //     beforeLoading: false,  // 是否在请求中
    //     errMess: "",  // 请求失败的错误信息
    //     userArr: []  
    // }


    // updateAppState = (othObj) => {
    //     this.setState(othObj);
    // }

    render() {
        return (
            <div className="app">
                <div className="main">
                    <Search />
                    <ResultList />
                </div>
            </div>
        )
    }
}
