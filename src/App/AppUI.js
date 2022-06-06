import React from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButtom } from '../components/CreateTodoButtom';

function AppUI({
    completedTodos,
    todos,
    searchValue,
    setSearchValue,
    searchedTodos,
    finishTodo,
    deleteTodo
}) {
    return (
    <React.Fragment>
      <TodoCounter 
        complete = {completedTodos}
        todos = {todos}
      />
      <TodoSearch 
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />
      <TodoList>
        {searchedTodos.map((todo) =>(
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed = {todo.completed}
            onFinish={() => {finishTodo(todo.text)}}
            onDelete={() => {deleteTodo(todo.text)}}
          />
        ))}
      </TodoList>
      <CreateTodoButtom />
    </React.Fragment>
    )
}

export { AppUI };