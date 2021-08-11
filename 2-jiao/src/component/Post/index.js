import React, { Component } from 'react'
import qs from 'querystring'

export default class Post extends Component {
    render() {
        console.log('props.location.state: ', this.props.location.state);
        // console.log('props.match.params: ', this.props.match.params);
        // console.log('props.location.search: ', this.props.location.search);
        let { id, title, content } = this.props.location.state;
        // let { id, title, content } = this.props.match.params;
        // let { id, title, content } = qs.parse(this.props.location.search.slice(1));
        // 解码传递来的参数
        return (
            <div>
                <p>{id}标题: {title}</p>
                <p>{id}文章内容: {content}</p>
                <hr></hr>
            </div>
        )
    }
}
