import React, { Component } from 'react'
import nosotros from '../../img/nosotros.jpg';
import Info from '../../components/Info/Info';
import Footer from '../../components/Footer/Footer';
import {API} from '../../config';
import Loader from '../../components/Loader/Loader';
import './Nosotros.css';

import {setActiveItem} from '../../helpers/helpers';

export default class Nosotros extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:undefined,
            autor:undefined
        }
    }
    
    componentDidMount(){
        setActiveItem(window.location.href);
        this.getData();
    }
    getData(){
        fetch(`${API}/nosotros`).then(res=>res.json()).then(data=>{
            this.setState({data:data.data[0]});
            fetch(`${API}/autor/1`).then(res=>res.json()).then(autor=>{
                this.setState({autor:autor.data[0]});
                setTimeout(() => {
                    for (let index = 0; index < document.getElementsByClassName('caja-info').length; index++) {
                        document.getElementsByClassName('caja-info')[index].classList.add('showCaja');
                    }; 
                }, 10);
            })
        })
    }
    render() {
        return (
            (this.state.data === undefined || this.state.autor === undefined)?<Loader/>:
            <>
                <div className="container-fluid container__info">
                    <div className="row">
                        <div className="col-md-6 imagen__info">
                            <img src={nosotros} alt={nosotros} className="img-fluid"/>
                        </div>
                        <div className="col-md-6 nosotros__txt">
                            <h2>Agrogane</h2>
                            <h6>{this.state.data.descripcion}</h6>
                        </div>
                    </div>
                </div>
                <Info/>
                <div className="container-fluid">
                    <div className="titulo__dueño">
                        <h3>AgroGane Fundador</h3>
                    </div>
                    <div className="contenido__dueño row">
                        <div className="col-12 col-md-3 datos__dueño">
                            <img src={this.state.autor.foto} alt={this.state.autor.nombre} className="img-fluid"/>
                            <p className="dueño__nombre">{this.state.autor.nombre}</p>
                            <span className="text-muted">{this.state.autor.tituloProfesional}</span>
                        </div>
                        <div className="col-12 col-md-9 texto__dueño">
                            <p style={{whiteSpace:"break-spaces"}}>{this.state.autor.descripcion}</p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}
