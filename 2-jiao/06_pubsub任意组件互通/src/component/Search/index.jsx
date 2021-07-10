import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {

    state = {
        lock: null
    }
    
    // 节流函数
    handleSearch = (waitTime) => {
        // 拿到输入值
        const { userInput: { value } } = this;
        console.log(value); 
        // console.log(Date());
        if (this.state.lock) {
            // console.log(Date());
            // this.props.updateAppState({limit: true})
            PubSub.publish("AK47", { limit: true });
            console.log('动作太快了..');
            return
        }

        // this.props.updateAppState({ beforeLoading: true });
        PubSub.publish("AK47", { beforeLoading: true });
        this.setState({
            lock: setTimeout(() => {
                this.setState({
                    lock: null
                })
            }, waitTime)
        });
        
        // 使用axios发送请求
        axios.get(`https://api.github.com/search/users?q=${value}`)
            .then(
                success => {
                    // this.props.updateAppState({
                    //     beforeLoading: false,
                    //     limit: false,
                    //     userArr: success.data.items
                    // });
                    PubSub.publish("AK47", {
                        beforeLoading: false,
                        limit: false,
                        userArr: success.data.items
                    });
                    console.log(success.data.items);
                },
                error => {
                    // console.log('axios的get错误 : ', error.message);
                    // this.props.updateAppState({
                    //     beforeLoading: false,
                    //     limit: false,
                    //     errMess: error.message
                    // });
                    PubSub.publish("AK47", {
                        beforeLoading: false,
                        limit: false,
                        errMess: error.message
                    });
                    console.log(error);
                }
        );
        
    }

    render() {
        return (
            <div className="search">
                <h3>搜索</h3>
                <input ref={ e => this.userInput = e } type="text" name="user-input" id="user-input" placeholder="输入" />
                <button onClick={() => { this.handleSearch(10000) } }>搜搜</button>
            </div>
        )
    }
}
