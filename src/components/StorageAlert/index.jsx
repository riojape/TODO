import './StorageAlert.css';

function StorageAlert ({buttonStorageAlert}) {
    

    return (
        <div className="alertStorage alertStorage-bg ">
            <section className="alertStorage-card">
                <p>Se han realizado cambios de esta pagina en otra ventana</p>
                <button onClick={buttonStorageAlert}>Actualizar</button>
            </section>
        </div>
    )
};

export {StorageAlert};