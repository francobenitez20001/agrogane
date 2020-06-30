import React from 'react';
import './Home.css';
import Info from '../../components/Info/Info';
import CasoExito from '../../components/CasoExito/CasoExito';
import ArticulosRecientes from '../../components/articulosRecientes/ArticulosRecientes';
import Testimonio from '../../components/Testimonio/Testimonio';
import Footer from '../../components/Footer/Footer';
const Home = () => {
    window.onload = ()=>{
        document.getElementsByTagName('p')[0].classList.add('showTxtBanner');
        document.getElementsByTagName('p')[1].classList.add('showTxtBanner');
    }
    window.addEventListener('scroll',event=>{
        let scroll = window.scrollY;
        if(scroll>750 && scroll<1071){
            for (let index = 0; index < document.getElementsByClassName('caja-info').length; index++) {
                document.getElementsByClassName('caja-info')[index].classList.add('showCaja');
            }
        }
    })
    return (
        <>
            <div className="banner__home">
                <p>Transformando ideas en negocios reales</p>
                <p className="name__banner">Agrogane</p>
            </div>
            <CasoExito/>
            <Info/>
            <div className="jumbotron container-fluid container__banner__info">
                <div className="row row-servicios">
                    <div className="col-12 col-md-6">
                        <a className="enlace-servicios my-4" href="/servicios">Industias en donde nos especializamos</a>
                        <a className="enlace-servicios my-4" href="/servicios">Nuestros Servicios</a>
                    </div>
                    <div className="col-12 col-md-5 descripcion-servicios">
                        <h3>Agiles y flexibles</h3>
                        <span className="text-muted text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis obcaecati distinctio autem doloribus quas maiores sunt ducimus minus</span>
                    </div>
                    <div className="col-md-1 info-seccion">
                        <h4 className="c-two-boxes__title">Lo que hacemos</h4>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row c__art__test">
                    <div className="col-12 col-md-5">
                        <ArticulosRecientes/>
                    </div>
                    <div className="col-12 col-md-7 text-right container__testimonio">
                        <Testimonio/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
 
export default Home;