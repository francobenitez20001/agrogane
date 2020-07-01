import React from 'react';
import Exito from '../Exito/Exito'
import './CasoExito.css';
const CasoExito = ({moreInfo,caso}) => {
    return (
        <div className="container-fluid casoExito__container">
            <div className="row card-exito">
                <div className="col-12 col-md-6 card-exito-div">
                    <Exito titulo={caso.titulo}/>
                </div>
                <div className="col-12 col-md-6 explicacion__exito">
                    <h4>{caso.resumen}</h4>
                    <p>{caso.contenido}</p>
                    {(moreInfo!=='false')?<a href="/casos-exito" className="linkCasoExito">Ver más casos de exito</a>:null}
                </div>
            </div>
        </div>
    );
}
 
export default CasoExito;