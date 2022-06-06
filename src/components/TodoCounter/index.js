import React from 'react';
import "./TodoCounter.css";

function TodoCounter ({complete, todos}){
    return (
        <h2 className="TodoCounter">Has completado {complete} de {todos.length} TODOS</h2>
    )
}

export {TodoCounter};