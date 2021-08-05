import React, { Component } from 'react';
import { Link, Route, HashRouter } from 'react-router-dom'

import './App.css';
import Nav from './component/Nav'
import Footer from './pages/Footer';
import Header from './pages/Header';
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
                <Nav />
                <HashRouter>
                    <div className="main">
                        <ul>
                            <li><Link to="/head">去Head</Link></li>
                            <li><Link to="/foot">去Foot</Link></li>
                        </ul>
                    </div>
                    <hr />

                    <Route path="/head">
                        <Header/>
                    </Route>
                    <Route path="/foot">
                        <Footer/>
                    </Route>
                </HashRouter>
                
                
            </div>
        )
    }
}
