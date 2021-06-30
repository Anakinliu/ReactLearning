import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {

    changeAll = (e) => {
        console.log(e.target.checked);
        this.props.selectAll(e.target.checked);
    }

    render() {
        const { count: [wancheng, quanbu], delDone } = this.props;
        return (
            <div className="todo-footer">
                <div>
                    <input id="all-check" type="checkbox" onChange={this.changeAll} checked={ wancheng === quanbu && quanbu !== 0 }/>
                    <label htmlFor="all-check">选择全部</label>
                </div>
                
                <p>已完成 { wancheng } / 全部 { quanbu } </p>
                <button onClick={() => { delDone() } }>清除已完成</button>
            </div>
        )
    }
}
