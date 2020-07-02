import React from 'react';
import './ItemServicio.css'
const ItemServicio = ({servicio}) => {
    const handleClickDescripcion = id=>{
        let indiceElement = id-1;
        document.getElementsByClassName('servicio__explicacion')[indiceElement].classList.toggle('d-none');
        document.getElementsByClassName('servicio__explicacion')[indiceElement].classList.toggle('showExplicacion');
        document.getElementsByClassName('flecha')[indiceElement].classList.toggle('rotateflecha');
    }

    return (
        <div>
            <div className="jumbotron item__servicio" onClick={()=>handleClickDescripcion(servicio.id)} key={servicio.id}>
                <i className={servicio.icono}></i>
                <h3 className="ml-4 mr-auto">{servicio.servicio}</h3>
                <i className="fas fa-angle-down flecha" onClick={()=>handleClickDescripcion(servicio.id)}></i>
            </div>
            <div className="servicio__explicacion d-none animated fadeIn fast">
                <p>{servicio.texto}</p>
            </div>
        </div>
    );
}
 
export default ItemServicio;