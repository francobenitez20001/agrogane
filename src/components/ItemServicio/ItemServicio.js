import React from 'react';
import './ItemServicio.css'
const ItemServicio = ({servicio}) => {
    const handleClickDescripcion = (id)=>{
        document.getElementById(id).classList.toggle('d-none');
        document.getElementById(id).classList.toggle('showExplicacion');
    }

    return (
        <div>
            <div className="jumbotron item__servicio" onClick={()=>handleClickDescripcion(servicio.idServicio)}>
                <i className="fab fa-facebook"></i>
                <h3 className="ml-4 mr-auto">{servicio.titulo}</h3>
                <i className="fas fa-angle-down" name={servicio.titulo} onClick={()=>handleClickDescripcion(servicio.idServicio)}></i>
            </div>
            <div className="servicio__explicacion d-none animated fadeIn fast" id={servicio.idServicio}>
                <p style={{whiteSpace:"break-spaces"}}>{servicio.descripcion}</p>
            </div>
        </div>
    );
}
 
export default ItemServicio;