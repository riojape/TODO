import React from 'react';
import { TodoContext} from '../components/TodoContext';
import { TodoCounter} from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButtom } from '../components/CreateTodoButtom';
import { Modal } from '../components/Modal';
import { TodosError } from '../components/TodosError';
import { TodosLoading } from '../components/TodosLoading';
import { EmptyTodos } from '../components/EmptyTodos';


function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    finishTodo,
    deleteTodo,
    openModal,
  } = React.useContext(TodoContext);

    return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <TodosError />}
        {loading && <TodosLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}
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
      {!!openModal && <Modal />}
      <CreateTodoButtom />
    </React.Fragment>
    )
}

export { AppUI };