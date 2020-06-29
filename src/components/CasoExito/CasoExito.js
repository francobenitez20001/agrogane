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
                    <h4>Titulo del caso de éxito</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea a vero doloribus illum minus dolorem sed porro. Officiis id iste nam veniam suscipit obcaecati distinctio assumenda eaque et, veritatis sapiente saepe eius itaque temporibus, facere in dolore!.</p>
                    <a href="/casos-exito" className="linkCasoExito">Ver más casos de exito</a>
                </div>
            </div>
        </div>
    );
}
 
export default CasoExito;