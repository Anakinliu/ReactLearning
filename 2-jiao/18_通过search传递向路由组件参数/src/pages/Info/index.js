import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import MyNavLink from '../../component/MyNavLink'
import Arch from './Arch'
import Tags from './Tags'
import "./index.css"

export default class Info extends Component {
    render() {
        return (
            <div>
                {/* 因为最外层的APP.js内已经有了BrowserRouter!!! */}
                {/* <BrowserRouter> */}
                    更多信息
                    <hr></hr>
                    <ul className="info-ul">
                        <li>
                            <MyNavLink to={"/cn/info/archs"} ><p>归档</p></MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to={"/cn/info/tags"} ><p>标签</p></MyNavLink>
                            {/* <NavLink activeClassName="highlight" to="/foot">去Foot</NavLink> */}
                        </li>
                    </ul>
                    <hr></hr>
                    <div>
                        <Route path="/cn/info/archs">
                            <Arch />
                        </Route>
                        <Route path="/cn/info/tags">
                            <Tags />
                        </Route>
                    </div>

                {/* </BrowserRouter> */}
            </div>
        )
    }
}
