import React from 'react';
import './index.css';
const ModalEquipo = (props) => {
    return (
        <>
            <div className="header__modalEquipo">
                <img src={`https://agrogane.com.ar/api/public/img/${props.autor.foto}`} className="img-fluid" alt="Nombre"/>
                <h4>{props.autor.nombre}</h4>
            </div>
            <div className="main__modalEquipo">
                <p style={{whiteSpace:"break-spaces"}}>{props.autor.descripcion}</p>
            </div>
            {(props.autor.cv !== null || typeof(props.autor.cv) === 'Object')?
                <a href={`https://agrogane.com.ar/api/public/img/${props.autor.cv}`} className="btn btn-success mt-3" style={{backgroundColor:"#2e7737"}} target="blank" download>Ver CV</a>
            :null
            }
        </>
    );
}
 
export default ModalEquipo;