import React from 'react';
import { TodoContext} from '../components/TodoContext';
import { TodoCounter} from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButtom } from '../components/CreateTodoButtom';
import { Modal } from '../components/Modal';



function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    finishTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

    return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Hubo un error</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
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