import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
    render() {
        console.log('MyNavLink: ', this.props.children);
        const { to } = this.props;
        return (
            <div>
                <NavLink activeClassName="highlight" to={to}>{this.props.children}</NavLink>
            </div>
        )
    }
}
