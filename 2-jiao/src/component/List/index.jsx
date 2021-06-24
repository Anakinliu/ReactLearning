import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Item from '../Item'
import './index.css'

export default class List extends Component {

    static propTypes = {
        list: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired,
        delTodo: PropTypes.func.isRequired,
    }

    render() {
        const { list: todos, updateTodo, delTodo } = this.props;
        console.log('list render');
        return (
            <ul className="todo-list">
                { todos.map(ele => {
                    return <Item
                        key={ ele.id }
                        todo={ ele }
                        updateTodo={ updateTodo }
                        delTodo={ delTodo }
                    />
                } ) }
            </ul>
        )
    }
}
