import React, { Component } from 'react';
import './Home.css';
import Info from '../../components/Info/Info';
import Footer from '../../components/Footer/Footer';
import {setActiveItem} from '../../helpers/helpers.js';
import {API} from '../../config';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            servicios:undefined
        };
    }
    
    componentDidMount(){
        setActiveItem(window.location.href);
        this.getServicios();
        setTimeout(() => {
            document.getElementsByTagName('p')[0].classList.add('showTxtBanner');
            document.getElementsByTagName('p')[1].classList.add('showTxtBanner');
        }, 10);
    }

    async getServicios(){
        try {
            fetch(`${API}/servicios?limit=10`).then(res=>res.json()).then(response=>{
                this.setState({servicios:response.data})
            })
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <>
                <div className="banner__home">
                    <p>Transformando ideas en negocios reales</p>
                    <p className="name__banner">AgroGane</p>
                </div>  
                <Info/>
                <div className="container-fluid my-3">
                {(this.state.servicios === undefined)?null:
                    this.state.servicios.map(servicio=>(
                        <div className="row my-3" key={servicio.idServicio}>
                            <div className="col-12 col-md-4 text-center">
                                <div className="circuloServicioHome bg-green">
                                    <h4 style={{fontSize:'19px'}} className="name__banner">{servicio.titulo}</h4>
                                </div>
                            </div>
                            <div className="col-12 col-md-8 d-flex align-items-center">
                                <div className="descripcion-servicio-home">
                                    <p>{servicio.descripcion.substr(0,250)}...<Link to="/servicios">Ver más</Link></p>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
                <Footer/>
            </>
        )
    }
}