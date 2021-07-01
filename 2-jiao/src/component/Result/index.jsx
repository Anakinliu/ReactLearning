import React, { Component } from 'react'

class ResultList extends Component {
    render() {
        const { userArr, beforeLoading, errMess, limit } = this.props;
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
