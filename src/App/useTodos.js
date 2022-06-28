import React from 'react';
import { useLocalStorage } from './useLocalStore';


const useTodos = () => {
    
    const [searchValue, setSearchValue] = React.useState('');
    const [ openModal, setOpenModal] = React.useState(false);
    const [addTodo, setAddTodo] = React.useState({});

    const {
        items: todos, 
        saveItems: setTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    /* ---- Funciones de TodoCounter ----*/
    const completedTodos = todos.filter(todo => !!todo.completed).length;

    /* ---- Funciones de TodoSearch ----*/
    let searchedTodos = [];

    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else{
        searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
        })
    };

    /* ---- Funciones de TodoItem ----*/
    const finishTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        if(!newTodos[todoIndex].completed){
        newTodos[todoIndex].completed = true;
        setTodos(newTodos);
        } else{
        newTodos[todoIndex].completed = false;
        setTodos(newTodos);
        };
    };
    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex,1);
        setTodos(newTodos);
    };

    /* ---- Funciones de Modal ----*/
    const addInputModal = (e) => {
        let value = e.target.value;
        let newTodo = {
        text:       value,
        completed:  false,
        };
        setAddTodo(newTodo);
    };
    // console.log (todos);
    const addButton = () => {
        setTodos([...todos, addTodo]);
        setOpenModal(false);
    };
    const closeModal = () => {
        setOpenModal(false);
    };

    return (
        {
            loading,
            error,
            completedTodos,
            todos,
            setTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            finishTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addInputModal,
            addButton,
            closeModal,
            /*addTodo,
            setAddTodo,*/
        }
    )
}

export {useTodos};