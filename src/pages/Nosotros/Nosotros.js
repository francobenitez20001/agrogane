import React from 'react';
import nosotros from '../../img/nosotros.jpg';
import avatar from '../../img/avatar.jpeg';
import Info from '../../components/Info/Info';
import Footer from '../../components/Footer/Footer';
import './Nosotros.css';
const Nosotros = () => {
    window.onload = ()=>{
        for (let index = 0; index < document.getElementsByClassName('caja-info').length; index++) {
            document.getElementsByClassName('caja-info')[index].classList.add('showCaja');
        } 
    }
    return (
        <>
            <div className="container-fluid container__info">
                <div className="row">
                    <div className="col-md-6 imagen__info">
                        <img src={nosotros} alt={nosotros} className="img-fluid"/>
                    </div>
                    <div className="col-md-6 nosotros__txt">
                        <h2>Agrogane</h2>
                        <h6>Somos un grupo de profesionales con amplia experiencia en el sector de agronegocios. Creemos en el potencial del pequeño y mediano productor y es por eso que nos enfocamos en asesorarlos y mejorar su gestión productiva, buscando maximizar sus beneficios.</h6>
                        <h6>Debido a que compartir nuestro conocimiento es nuestra pasión, ofrecemos nuestros servicios a pequeños y medianos productores tanto ganaderos como avícolas, ayudando a nuestros clientes a lograr resultados sobresalientes en las actividades en la que están inmersos.</h6>
                    </div>
                </div>
            </div>
            <Info/>
            <div className="container-fluid">
                <div className="titulo__dueño">
                    <h3>Agrogane Fundador</h3>
                </div>
                <div className="contenido__dueño row">
                    <div className="col-12 col-md-3 datos__dueño">
                        <img src={avatar} alt={avatar} className="img-fluid"/>
                        <p className="dueño__nombre">Michel Huvelle</p>
                        <span className="text-muted">Ingeniero agrónomo</span>
                    </div>
                    <div className="col-12 col-md-9 texto__dueño">
                        <p>Guy Sela is an agronomist by profession, and specializes in water, plant nutrition and digital agriculture. Guy has worked for the world’s leading agricultural companies and created SMART! Fertilizer Management, a leading digital-ag company, prior to starting his current venture – Cropaia.</p>
                        <p>Guy spent many years researching and experimenting ways to improve agricultural production and bringing progress to the agricultural industry. Guy honed his skills on commercial farming projects around the world and by working with thousands of growers and agronomists globally.</p>
                        <p>He has written over seventy different professional publications. His participation in conferences and symposiums has allowed him to share his knowledge, expertise as one of the leading plant nutrition experts in the world.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
 
export default Nosotros;