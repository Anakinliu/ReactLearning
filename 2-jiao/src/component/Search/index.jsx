import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

    state = {
        lock: 0
    }

    // 节流函数
    handleSearch = () => {
        // 拿到输入值
        const { userInput: { value } } = this;
        console.log(value);
        // console.log(Date());
        if (this.state.lock !== 0) {
            // console.log(Date());
            console.log('动作太快了..');
            return
        }
        this.setState(
            {
                lock: 1
            }
        )
        setTimeout(() => {
            this.setState(
                {
                    lock: 0
                }
            )
        }, 10000);
        
        // 使用axios发送请求
        axios.get(`https://api.github.com/search/users?q=${value}`)
            .then(
                success => {
                    console.log(success.data.items);
                },
                error => {
                    console.log(error);
                }
        );
        
    }

    render() {
        return (
            <div className="search">
                <h3>搜索</h3>
                <input ref={ e => this.userInput = e } type="text" name="user-input" id="user-input" placeholder="输入" />
                <button onClick={ this.handleSearch }>搜搜</button>
            </div>
        )
    }
}
