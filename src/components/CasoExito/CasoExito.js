import React from 'react';
import Exito from '../Exito/Exito'
import './CasoExito.css';
const CasoExito = () => {
    window.addEventListener('scroll',event=>{
        let scroll = window.scrollY;
        if(scroll>285.60 && scroll<1428){
            document.getElementsByClassName('makeStyles-root-1')[0].classList.add('showCard');
            document.getElementsByClassName('explicacion__exito')[0].classList.add('showExplicacionExito');
        }
    })
    return (
        <div className="container-fluid casoExito__container">
            <div className="row card-exito">
                <div className="col-12 col-md-6 card-exito-div">
                    <Exito/>
                </div>
                <div className="col-12 col-md-6 explicacion__exito">
                    <h4>Inversión inicial 360000 uss</h4>
                    <p>Concentrar una superficie productiva integrada por 5 establecimientos con una superficie total de 6000 has mixtas compradas a un promedio de 600uss/ha. donde se llegó a un potencial productivo muy grande incorporando a campos naturales en ese momento de compra, las actividades cría, invernada de la propia producción, agricultura (girasol, trigo) pasturas coasociadas base alfalfa, IATF, servicio 15 meses etc. Los valores actuales de estos campos son de 5000uss/ha</p>
                    <a href="/casos-exito" className="linkCasoExito">Ver más casos de exito</a>
                </div>
            </div>
        </div>
    );
}
 
export default CasoExito;