import React from 'react';
import "./TodoCounter.css";

function TodoCounter ({todos, completedTodos, loading}){

    return (
        <h2 
            className={`TodoCounter ${loading && 'TodoCounter--loading'}`
        }>
            Has completado {completedTodos} de {todos.length} TODOS
        </h2>
    )
}

export {TodoCounter};