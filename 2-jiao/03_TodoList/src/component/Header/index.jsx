import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'

import './index.css'

export default class Header extends Component {

    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    // 处理键盘事件
    handleEnterKeyUp = (e) => {
        // 过滤回车键
        if (e.keyCode !== 13) {
            return;
        }
        // 获得用户输入并去掉前后空白
        const userInput = e.target.value.trim();
        if (!userInput) {
            return;
        }
        console.log('输入: ', userInput);
        const todo = { id: nanoid(), desp: userInput, done: false };
        // App.js的回调函数
        this.props.addTodo(todo);
        // 清空回收
        e.target.value = "";
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={ this.handleEnterKeyUp } className="todo-input" type="text" placeholder="输入任务,回车确认"/>
            </div>
        )
    }
}
