import { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { TodoContext } from '../TodoContext';
import './Modal.css';

function Modal() {
  const {
    todos,
    setTodos,
    setOpenModal,
  } = useContext(TodoContext);

  const [addTodo, setAddTodo] = useState({});

  const addInputModal = (e) => {
    // console.log(typeof(e.target.value));
    let value = e.target.value;
    let newTodo = {
      text:       value,
      completed:  false,
    };
    setAddTodo(newTodo);
  };
  console.log (addTodo);

  const addButton = () => {
    setTodos([...todos, addTodo]);
    setOpenModal(false);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

    return ReactDOM.createPortal(
      <div className="modal modal-bg">
        <form  className="modal-form">
          <label for="newTodo" className='form-control-label'>Escribe tu nuevo TODO</label> 
          <input 
            onChange={addInputModal} 
            type="text" 
            className='form-control-input' 
            placeholder="Limpiar departamento" 
            id='newTodo'/>       
          <div className="form-container-btn">
            <button 
              className="btn btn-primary"
              type="button" 
              variant="container"
              onClick={addButton}
            >
              Añadir
            </button>

            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={closeModal}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>,

        document.getElementById('modal')
    );
};

export { Modal }; 