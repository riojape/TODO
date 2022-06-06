import React from 'react';
import "./CreateTodoButtom.css";


function CreateTodoButtom (){
    const onClickButton = (msg)=>{
        alert(msg);
    };

    return (
        <button 
        className="CreateTodoButton" 
        type="button" 
        onClick={()=>onClickButton('Se creara un nuevo TODO')}
        >
            +

        </button>
    )
}

export { CreateTodoButtom };