import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import {API} from '../../config';
import Loader from '../../components/Loader/Loader';
import Testimonio from '../../components/Testimonio/Testimonio';
import './Nosotros.css';

import {setActiveItem} from '../../helpers/helpers';

export default class Nosotros extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:undefined,
            autor:undefined,
            contacto:undefined
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
                this.getContactoData();
            })
        })
    }

    getContactoData(){
        fetch(`${API}/contacto`).then(res=>res.json()).then(data=>{
            this.setState({contacto:data.data[0]});
        })
    };

    render() {
        return (
            (this.state.data === undefined || this.state.autor === undefined || this.state.contacto === undefined)?<Loader/>:
            <>
                <div className="container-fluid container__info">
                    <div className="row">
                        <div className="col-md-6 imagen__info">
                            <img src={this.state.data.header} alt={this.state.data.header}/>
                        </div>
                        <div className="col-md-6 nosotros__txt">
                            <h2>Agrogane</h2>
                            <h6 style={{whiteSpace:'break-spaces'}}>{this.state.data.descripcion}</h6>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="titulo__dueño">
                        <h3>AgroGane Fundador</h3>
                    </div>
                    <div className="contenido__dueño row">
                        <div className="col-12 col-md-3 datos__dueño">
                            <img src={this.state.autor.foto} alt={this.state.autor.nombre} className="img-fluid"/>
                            <p className="dueño__nombre">{this.state.autor.nombre}</p>
                            <span className="text-muted">{this.state.autor.tituloProfesional}</span>
                            <a className="d-block" href={this.state.contacto.linkedin} target="blank"><i style={{fontSize:'28px',marginTop:'10px',color:'black'}} className="fab fa-linkedin"></i></a>
                        </div>
                        <div className="col-12 col-md-9 texto__dueño">
                            <p style={{whiteSpace:"break-spaces"}}>{this.state.autor.descripcion}</p>
                        </div>
                    </div>
                    <div className="col-12 my-5 text-right container__testimonio">
                            <Testimonio/>
                    </div>
                </div>
                <Footer telefonoPrincipal={this.state.contacto.telefonoPrincipal}
                        telefonoSecundario={this.state.contacto.telefonoSecundario}
                        email={this.state.contacto.email}
                        twitter={this.state.contacto.twitter}
                        instagram={this.state.contacto.instagra}
                        facebook={this.state.contacto.facebook}/>
            </>
        )
    }
}
