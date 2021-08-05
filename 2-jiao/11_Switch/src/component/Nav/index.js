import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        console.log('At Nav render: ', this.props);
        return (
            <div>
                这里是导航栏
            </div>
        )
    }
}
