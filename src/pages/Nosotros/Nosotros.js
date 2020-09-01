import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import {API} from '../../config';
import Loader from '../../components/Loader/Loader';
import Testimonio from '../../components/Testimonio/Testimonio';
import './Nosotros.css';

import {setActiveItem} from '../../helpers/helpers';
import Avatar from '../../components/Avatar';
import Equipo from '../../components/Equipo';

export default class Nosotros extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:undefined,
            autor:undefined,
            contacto:undefined,
            autores:[]
        }
    }
    
    componentDidMount(){
        setActiveItem(window.location.href);
        this.getData();
    }
    getData(){
        fetch(`${API}/nosotros`).then(res=>res.json()).then(data=>{
            this.setState({data:data.data[0]});
            fetch(`${API}/autor`).then(res=>res.json()).then(autor=>{
                this.setState({autor:autor.data[0],autores:autor.data});
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
                            <img src={`https://agrogane.com.ar/api/public/img/${this.state.data.header}`} alt={this.state.data.header}/>
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
                        <div className="col-12 col-md-3">
                            <Avatar foto={this.state.autor.foto}
                                    nombre={this.state.autor.nombre}
                                    tituloProfesional={this.state.autor.tituloProfesional}
                                    linkedin={this.state.contacto.linkedin}
                                    email={this.state.contacto.email_personal}/>
                        </div>
                        <div className="col-12 col-md-9 texto__dueño">
                            <p style={{whiteSpace:"break-spaces"}}>{this.state.autor.descripcion}</p>
                        </div>
                    </div>
                    <div className="col-12 my-5 text-right container__testimonio">
                            <Testimonio/>
                    </div>
                </div>
                <div className="container-fluid">
                    <h3 className="titulo__dueño" style={{fontWeight:'500'}}>Nuestro equipo</h3>
                    <Equipo autores={this.state.autores}/>
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
