import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        // console.log(this.props.match.params)
        let { id, title, content } = this.props.match.params;
        return (
            <div>
                <p>{ id }标题: { title }</p>
                <p>{ id }文章内容: {content}</p>
                <hr></hr>
            </div>
        )
    }
}
