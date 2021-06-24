import Footer from './component/Footer'
import Header from './component/Header'
import List from './component/List'
import './App.css'
import React from 'react'
// "顶级"组件App
class App extends React.Component {

    state = {
        list: [
            { id: "001", desp: "吃饭", done: true },
            { id: "002", desp: "睡觉", done: true },
            { id: "003", desp: "玩游戏", done: true },
            { id: "004", desp: "上班", done: false }
        ]
    }
    // 添加一个组件的回调,传递给header组件
    addTodo = (todo) => {
        const newTodos = [...this.state.list, todo];
        this.setState({
            list: newTodos
        })
    }
    // 更新todo的回调函数,传递给List,List再传递给Item组件
    updateTodo = (id, done) => {
        const newList = this.state.list.map(ele => {
            if (ele.id === id) {
                ele.done = done;
                return ele
            }
            return ele;
        });
        this.setState({
            list: newList
        });
    }

    // 删除指定id的todo
    delTodo = (id) => {
        const newList = this.state.list.filter(ele => ele.id !== id);
        this.setState({
            list: newList
        });
    }

    // 已完成的todo个数
    completedCount = () => {
        const count = this.state.list.filter(ele => {
            return ele.done;
        }).length;
        return count;
    }
    // 是否选取全部todo
    selectAll = (flag) => {
        const newList = this.state.list.map(ele => {
            ele.done = flag;
            return ele;
        });
        this.setState({
            list: newList
        });
    }
    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List list={this.state.list} updateTodo={this.updateTodo} delTodo={this.delTodo} />
                    <Footer
                        count={[this.completedCount(), this.state.list.length]}
                        selectAll={this.selectAll}
                    />
                </div>
            </div>
        )
    }
}

export default App