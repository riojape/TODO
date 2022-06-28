import React from 'react';
// import { AppUI } from './AppUI';
import { useTodos } from './useTodos';
import { TodoCounter } from '../components/Header/TodoCounter';
import { TodoSearch } from '../components/Header/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodosError } from '../components/TodoList/TodosError';
import { TodosLoading } from '../components/TodoList/TodosLoading';
import { EmptyTodos } from '../components/TodoList/EmptyTodos';
import { CreateTodoButtom } from '../components/CreateTodoButtom';
import { Modal } from '../components/Modal';
import { TodoItem } from '../components/TodoList/TodoItem';
import { Header } from '../components/Header/Header';
import { EmptySearchResults } from '../components/TodoList/EmptySearchResults';

// const defaultTodos = [
//   {text: 'Cortar Cebolla', completed: false},
//   {text: 'Tormar el curso de intro a react', completed: false},
//   {text: 'Llorar con la llorona', completed: true},
//   {text: 'Hacer ejercicio', completed: true},
// ]

function App() {
  const {
    loading,
    error,
    completedTodos,
    todos,
    // setTodos,
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
  } = useTodos();

  return (
    <React.Fragment>
        <Header loading={loading}>
          <TodoCounter 
            todos = {todos} 
            completedTodos = {completedTodos}
            // loading = {loading}
          />
          <TodoSearch 
            searchValue = {searchValue}
            setSearchValue = {setSearchValue}
            // loading = {loading}
          />
        </Header>
        <TodoList
          todos= {todos}
          error = {error} 
          loading = {loading}
          searchedTodos = {searchedTodos}
          onError = {() => <TodosError />}
          onLoading = {() => <TodosLoading />}
          onEmptyTodos = {() => <EmptyTodos />}
          onEmptySearchResults = {() => <EmptySearchResults searchValue = {searchValue} />}
          render = {(todo) => 
            <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed = {todo.completed}
                onFinish={() => {finishTodo(todo.text)}}
                onDelete={() => {deleteTodo(todo.text)}}
            />
          }
        />
        {!!openModal && 
          <Modal 
          addInputModal = {addInputModal}
          addButton = {addButton}
          closeModal = {closeModal}
        />}
        <CreateTodoButtom 
          openModal = {openModal}
          setOpenModal = {setOpenModal}
        />
      </React.Fragment>
      )
}

export default App;
