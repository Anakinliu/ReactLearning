import React, { Component } from 'react'
import PubSub from 'pubsub-js'

class ResultList extends Component {

    state = {
        limit: false,
        beforeLoading: false,  // 是否在请求中
        errMess: "",  // 请求失败的错误信息
        userArr: []  
    }

    componentDidMount() {
        PubSub.subscribe("AK47", (code, data) => {
            // code就是AK47
            this.setState(data);
        })
    }

    render() {
        // const { userArr, beforeLoading, errMess, limit } = this.props;
        const { userArr, beforeLoading, errMess, limit } = this.state;
        return (
            <div className="content">
                <ul className="list">
                    { limit ? "动作太快了..." : beforeLoading ? "加载中..."
                        : errMess !== "" ? errMess
                                : userArr.length ?
                                    userArr.map(ele => {
                                        return (
                                            <li className="item" key={ ele.id }>
                                                <a href={ ele.html_url } target = "_black">
                                                    <img src={ ele.avatar_url } alt=""  />
                                                </a>
                                                <span>{ ele.login }</span>
                                            </li>
                                        )
                                    })
                                : "暂无结果"
                        }
                </ul>
            </div>
        )
    }
}

export default ResultList
