import React from 'react';
import "./CreateTodoButtom.css";

function CreateTodoButtom ({openModal, setOpenModal}){

    const handleClickOpen = () => {
        if (openModal){
            setOpenModal(false);
        } else {
            setOpenModal(true);
        }
        // console.log(openModal);
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