import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../components/TodoContext';

// const defaultTodos = [
//   {text: 'Cortar Cebolla', completed: false},
//   {text: 'Tormar el curso de intro a react', completed: false},
//   {text: 'Llorar con la llorona', completed: true},
//   {text: 'Hacer ejercicio', completed: true},
// ]


function App() {
 
  return (
    <TodoProvider>
      <AppUI  />
    </TodoProvider>
  );
}

export default App;
