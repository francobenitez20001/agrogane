import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Home.css';
import Info from '../../components/Info/Info';
import CasoExito from '../../components/CasoExito/CasoExito';
import ArticulosRecientes from '../../components/articulosRecientes/ArticulosRecientes';
import Testimonio from '../../components/Testimonio/Testimonio';
import Footer from '../../components/Footer/Footer';
import {setActiveItem} from '../../helpers/helpers.js';
import {API} from '../../config';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exito:undefined
        };
    }
    
    componentDidMount(){
        setActiveItem(window.location.href);
        this.getCasoExito();
        setTimeout(() => {
            document.getElementsByTagName('p')[0].classList.add('showTxtBanner');
            document.getElementsByTagName('p')[1].classList.add('showTxtBanner');
        }, 10);
    }

    getCasoExito(){
        fetch(`${API}/caso-exito?limit=1`).then(res=>res.json()).then(data=>{
            this.setState({exito:data.data[0]});
            window.addEventListener('scroll',event=>{
                let scroll = window.scrollY;
                if(this.props.location.pathname === '/' || this.props.location.pathname === 'caso-exito'){
                    if(scroll>285.60){
                        document.getElementsByClassName('MuiPaper-root')[0].classList.add('showCard');
                        document.getElementsByClassName('explicacion__exito')[0].classList.add('showExplicacionExito');
                    }
                }
                if(scroll>750 && scroll<1071){
                    for (let index = 0; index < document.getElementsByClassName('caja-info').length; index++) {
                        document.getElementsByClassName('caja-info')[index].classList.add('showCaja');
                    }
                }
            })
        })
    }

    render() {
        return (
            <>
                <div className="banner__home">
                    <p>Transformando ideas en negocios reales</p>
                    <p className="name__banner">AgroGane</p>
                </div>
                {(this.state.exito === undefined)?null:<CasoExito caso={this.state.exito}/>}    
                <Info/>
                <div className="jumbotron container-fluid container__banner__info">
                    <div className="row row-servicios">
                        <div className="col-12 col-md-6">
                            <Link className="enlace-servicios my-4" to="/nosotros">Industias en donde nos especializamos</Link>
                            <Link className="enlace-servicios my-4" to="/servicios">Nuestros Servicios</Link>
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
                <div className="container-fluid mb-3">
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
        )
    }
}