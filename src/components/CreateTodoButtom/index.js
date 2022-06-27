import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import "./CreateTodoButtom.css";

function CreateTodoButtom (){
    const {
        openModal,
        setOpenModal,
    } = useContext(TodoContext);

    const handleClickOpen = () => {
        if (openModal){
            setOpenModal(false);
        } else {
            setOpenModal(true);
        }
        console.log(openModal);
    };

    return (
        <button 
        className="CreateTodoButton" 
        type="button" 
        onClick={handleClickOpen}
        >
            +

        </button>
    )
}

export { CreateTodoButtom };