import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom'
import Post from '../../../component/Post'
export default class Arch extends Component {

    render() {
        let postData = [
            { id: 1, title: "起床", content: "起不来" },
            { id: 2, title: "睡觉", content: "睡不醒" }
        ]
        return (
            <div>
                <ul>
                    {postData.map(post => {
                        return (
                            <li key={post.id}><Link to={`/cn/info/archs/${post.id}/${post.title}/${post.content}`}>文章{post.id}</Link></li>
                        )
                    })
                    }
                </ul>
                <hr></hr>
                <Route path="/cn/info/archs/:id/:title/:content" component={ Post }>
                </Route>
            </div>
        )
    }
}
