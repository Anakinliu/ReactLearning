import React, { Component } from 'react';
import { Link, Route, BrowserRouter, NavLink, Switch, Redirect } from 'react-router-dom'

import './App.css';
import Nav from './component/Nav'
import Footer from './pages/Footer';
import Header from './pages/Header';
import MyNavLink from './component/MyNavLink';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
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
                <BrowserRouter>
                    <div className="main">
                        <ul>
                            <li>
                                <MyNavLink to={"/cn/head"} ><p>去Head</p></MyNavLink>
                            </li>
                            <li>
                                <MyNavLink to={"/cn/foot"} ><p>去Foot</p></MyNavLink>
                                {/* <NavLink activeClassName="highlight" to="/foot">去Foot</NavLink> */}
                            </li>
                            <li>
                                <MyNavLink to={"/cn/info"} ><p>去Info</p></MyNavLink>
                                
                            </li>
    
                        </ul>
                    </div>
                    <hr />
                    <Switch>
                        {/*  url 必须就是/cn/head才能匹配 */}
                        <Route exact path="/cn/head">
                            <Header />
                        </Route>
                        {/*  url 是/cn/foot/xxx或者cn/foot/xxx/xxx...等等 都能匹配 */}
                        <Route path="/cn/foot">
                            <Footer />
                        </Route>
                        <Route path="/cn/info">
                            <Info />
                        </Route>
                        <Route path="/404">
                            <NotFound/>
                        </Route>
                        {/* 在地址栏敲/xxxxx都会定向到/somewhere */}
                        <Redirect to="/404">

                        </Redirect>
                    </Switch>

                </BrowserRouter>


            </div>
        )
    }
}
