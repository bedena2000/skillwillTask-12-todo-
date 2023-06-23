import React from "react";
import TodoItem from "./TodoItem";
import styles from './ShouldDone.module.css';

class ShouldDone extends React.Component {
    constructor(props) {
        super(props);
    };


    render() {
        return (
            <div className={styles['items-todo-wrapper']}>
                { 
                    this.props.todoList.map(item => {
                        if(item.isActive) {
                            return <TodoItem updateTodo={this.props.updateTodo} whatIsIt={item.isActive} key={item.uniqueId} todoTitle={item.todoName} uniqueItem={item.uniqueId} />
                        }
                    })
                }
            </div>
        )
    }
};

export default ShouldDone;