import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    state = {
        mouseEnter: false
    }
    // 鼠标移入移出一个Item时
    handleMouseEnter = (mouse) => {
        return () => {
            this.setState({
                mouseEnter: mouse
            })
        }
    }
    // 鼠标点击勾选框
    handleCheckBox = (id) => {
        return (e) => {
            // console.log(id, e.target.checked);
            this.props.updateTodo(id, e.target.checked)
        }
    }
    // 点击某个todo的删除
    handleDelBtn = (id) => {
        return event => {
            if (window.confirm("确定删除?")) {
                this.props.delTodo(id);
            }
        }
    }
    render() {
        const { id, desp, done } = this.props.todo;
        return (
            <li onMouseOver={this.handleMouseEnter(true)}
                onMouseOut={this.handleMouseEnter(false)}
            >
                <input id={"check-done" + id}
                    type="checkbox" checked={done}
                    onChange={ this.handleCheckBox(id) }
                />
                <p>
                    <label htmlFor={"check-done" + id}>{desp}</label>
                </p>
                <div className="del">
                    <button style={{ display: this.state.mouseEnter ? 'block' : 'none' }}
                        onClick={this.handleDelBtn(id)}>
                        删除
                    </button>
                </div>
            </li>
        )
    }
}
