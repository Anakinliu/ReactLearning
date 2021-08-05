import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        console.log('At Footer render: ', this.props);
        return (
            <div>
                Footer的内容在这
            </div>
        )
    }
}
