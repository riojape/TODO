import React from 'react';
import "./TodoItem.css";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoItem ({ text, completed, onFinish, onDelete }) {
    

    return (
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check  ${!!completed && 'Icon-check--active'}`}
                onClick={onFinish}
            >
                <CheckBoxIcon />
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
                <DeleteIcon /> 
            </span>
        </li>
    )
}

export {TodoItem};