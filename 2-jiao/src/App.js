import React, { Component } from 'react';
import './App.css';
import Search from './component/Search';
import ResultList from './component/Result';
export default class App extends Component {

    setUserArr = () => {

    }
    render() {
        return (
            <div className="app">
                <div className="main">
                    <Search setUserArr={this.setUserArr} />
                    <ResultList />
                </div>
            </div>
        )
    }
}
