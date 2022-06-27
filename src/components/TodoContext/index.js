import React from 'react';
import { useLocalStorage } from './useLocalStore';

const TodoContext = React.createContext();

function TodoProvider (props) {
    
    const [searchValue, setSearchValue] = React.useState('');
    const [ openModal, setOpenModal] = React.useState(false);

    const {
        items: todos, 
        saveItems: setTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    const completedTodos = todos.filter(todo => !!todo.completed).length;

    let searchedTodos = [];

    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else{
        searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
        })
    }

    const finishTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        if(!newTodos[todoIndex].completed){
        newTodos[todoIndex].completed = true;
        setTodos(newTodos);
        } else{
        newTodos[todoIndex].completed = false;
        setTodos(newTodos);
        }
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex,1);
        setTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            todos,
            searchValue,
            setSearchValue,
            searchedTodos,
            finishTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider};