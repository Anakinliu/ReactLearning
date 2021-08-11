import React, { Component } from 'react'
import qss from 'querystring'

export default class Post extends Component {
    render() {
        console.log(this.props.location.search);
        // 解码传递来的参数
        let { id, title, content } = qss.parse(this.props.location.search.slice(1))
        return (
            <div>
                <p>{ id }标题: { title }</p>
                <p>{ id }文章内容: {content}</p>
                <hr></hr>
            </div>
        )
    }
}
