import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {

    changeAll = (e) => {
        console.log(e.target.checked);
        this.props.selectAll(e.target.checked);
    }

    render() {
        return (
            <div className="todo-footer">
                <div>
                    <input id="all-check" type="checkbox" onChange={ this.changeAll } />
                    <label htmlFor="all-check">选择全部</label>
                </div>
                
                <p>已完成 { this.props.count[0] } / 全部 { this.props.count[1] } </p>
                <button>清除已完成</button>
            </div>
        )
    }
}
