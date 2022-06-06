import React from 'react';
import { AppUI } from './AppUI';

const defaultTodos = [
  {text: 'Cortar Cebolla', completed: false},
  {text: 'Tormar el curso de intro a react', completed: false},
  {text: 'Llorar con la llorona', completed: true},
]

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(defaultTodos);

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
    <AppUI 
      completedTodos = {completedTodos}
      todos = {todos}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      searchedTodos = {searchedTodos}
      finishTodo = {finishTodo}
      deleteTodo = {deleteTodo}
    />
  );
}

export default App;
