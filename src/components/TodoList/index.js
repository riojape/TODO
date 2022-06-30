import React from 'react';
import "./TodoList.css";

function TodoList ({
    children,
    todos,
    error, 
    loading,
    searchedTodos, 
    onError, 
    onLoading, 
    onEmptyTodos,
    onEmptySearchResults,
    render }) {
    
    return(
        <ul>
            {error && onError()}
            {loading && onLoading()}
            {(!loading && !todos.length) && onEmptyTodos()}
            {(!searchedTodos.length && !!todos.length) && onEmptySearchResults()}
            {!loading && searchedTodos.map(todo => render(todo) || children)} {/*Osea que si no hay uno se renderiza el otro*/}
        </ul>
    )
}

export {TodoList};