import React from 'react';
import classes from './TodoItem.module.css';

function TodoItem(props) {
        return (
            <div className={classes.todoitem}>
                <input type="checkbox" id={props.id} checked={props.completed} onChange={()=>props.handleChange(props.id)}/>
                <label htmlFor={props.id}>{props.text}</label>
            </div>
        )
}


export default TodoItem;
