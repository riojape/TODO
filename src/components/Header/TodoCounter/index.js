import React from 'react';
import "./TodoCounter.css";
// import {TodoContext} from "../../../App/useTodos";

function TodoCounter ({todos, completedTodos}){

    return (
        <h2 className="TodoCounter">Has completado {completedTodos} de {todos.length} TODOS</h2>
    )
}

export {TodoCounter};