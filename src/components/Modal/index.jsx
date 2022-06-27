import ReactDOM from 'react-dom';
import './Modal.css';

function Modal() {
    return ReactDOM.createPortal(

      <div className="modal modal-bg">
        <form  className="modal-form">
          <label for="newTodo" className='form-control-label'>Escribe tu nuevo TODO</label> 
          <input 
            // onChange={addChange} 
            type="text" 
            className='form-control-input' 
            placeholder="Limpiar departamento" 
            id='newTodo'/>       
          <div className="form-container-btn">
            <button 
              className="btn btn-primary"
              type="button" 
              variant="container"
              // onClick={addButton}
            >
              Añadir
            </button>
            <button type="button" className="btn btn-secondary">Cancelar</button>
          </div>
        </form>
      </div>,

        document.getElementById('modal')
    );
};

export { Modal }; 