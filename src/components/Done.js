import React from "react";
import TodoItem from "./TodoItem";
import styles from './Done.module.css';

class Done extends React.Component {
    constructor(props) {
        super(props);
    };


    render() {
        return (
            <div className={styles['items-todo-wrapper']}>
                {
                    this.props.todoList.map(item => {
                        if(!(item.isActive)) {
                            return <TodoItem updateTodo={this.props.updateTodo} whatIsIt={item.isActive} key={item.uniqueId} todoTitle={item.todoName} uniqueItem={item.uniqueId} />
                        }
                    })
                }
            </div>
        )
    }
};

export default Done;