import React, { Component } from 'react'
import './App.css'
export default class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="main">
                    <div className="search">
                        <p>搜索</p>
                        <input type="text" name="user-input" id="user-input" placeholder="输入" />
                        <button>搜搜</button>
                    </div>
                    <div className="content">
                        <ul className="list">
                            <li className="item">

                                <img src="1.png" alt="" srcset="" />
                                <span>头像</span>

                            </li>
                            <li className="item">
                                <img src="1.png" alt="" srcset="" />
                                <span>头像</span>

                            </li>
                            <li className="item">
                                <img src="1.png" alt="" srcset="" />
                                <span>头像</span>

                            </li>
                            <li className="item">
                                <img src="1.png" alt="" srcset="" />
                                <span>头像</span>

                            </li>
                            <li className="item">
                                <img src="1.png" alt="" srcset="" />
                                <span>头像</span>

                            </li>
                            <li className="item">
                                <img src="1.png" alt="" srcset="" />
                                <span>头像</span>

                            </li>
                            <li className="item">
                                <img src="1.png" alt="" srcset="" />
                                <span>头像</span>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
