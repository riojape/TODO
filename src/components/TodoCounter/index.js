import React from 'react';
import "./TodoCounter.css";
import {TodoContext} from "../TodoContext/index";

function TodoCounter (){
    const {
        todos,
        completedTodos,
    } = React.useContext(TodoContext);

    return (
        <h2 className="TodoCounter">Has completado {completedTodos} de {todos.length} TODOS</h2>
    )
}

export {TodoCounter};