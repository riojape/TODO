import React from 'react';
import { TodoContext } from '../TodoContext';
import "./TodoItem.css";

function TodoItem ({ text, completed, onFinish, onDelete }) {
    

    return (
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check  ${!!completed && 'Icon-check--active'}`}
                onClick={onFinish}
            >
                √
            </span>
            
            <p 
                className={`TodoItem-p ${!!completed &&'TodoItem-p--complete'}`}
            >
                {text}
            </p>

            <span 
                className="Icon Icon-delete"
                onClick={onDelete}
            >
                X 
            </span>
        </li>
    )
}

export {TodoItem};