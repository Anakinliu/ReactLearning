import React from 'react'
import hello from './index.module.css'

export default class Title extends React.Component {
    render() {
        return (
            <h1 className={ `${hello.s1} ${hello.s2}` }>
                title
            </h1>
        )
    }
}