import React from "react";
import { Button } from "@mui/material";
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className={styles['todo-item']}>
                <p>{this.props.todoTitle}</p>
                {
                    this.props.whatIsIt ? <Button onClick={() => this.props.updateTodo('changeActive', this.props.uniqueItem)} variant="contained">DONE</Button> : (
                        <div style={{
                            display: 'flex',
                            gap: '20px'
                        }}>
                            <Button variant="contained" onClick={() => this.props.updateTodo('backToActive', this.props.uniqueItem)}>RESTORE</Button>
                            <Button variant="contained" onClick={() => this.props.updateTodo('removeItem', this.props.uniqueItem)}>REMOVE</Button>
                        </div>
                    )
                }
            </div>
        )
    }
};

export default TodoItem;