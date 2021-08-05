import React, { Component } from 'react';
import { Link, Route, HashRouter, NavLink, Switch } from 'react-router-dom'

import './App.css';
import Nav from './component/Nav'
import Footer from './pages/Footer';
import Header from './pages/Header';
import Info from './pages/Info';
import MyNavLink from './component/MyNavLink';
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
                <hr />
                <HashRouter>
                    <div className="main">
                        <ul>
                            <li>
                                <MyNavLink to={"/head"} ><p>去Head</p></MyNavLink>
                            </li>
                            <li>
                                <MyNavLink to={"/foot"} ><p>去Foot</p></MyNavLink>
                                {/* <NavLink activeClassName="highlight" to="/foot">去Foot</NavLink> */}
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <Switch>
                        <Route path="/head">
                            <Header />
                        </Route>
                        <Route path="/foot">
                            <Footer />
                        </Route>
                        <Route path="/foot">
                            <Info />
                        </Route>
                    </Switch>

                </HashRouter>


            </div>
        )
    }
}
