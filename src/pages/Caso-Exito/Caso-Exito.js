import React, { Component } from 'react'
import Banner from '../../components/Banner/Banner';
import CasoExito from '../../components/CasoExito/CasoExito';
import Footer from '../../components/Footer/Footer';
import {setActiveItem} from '../../helpers/helpers';
import {API} from '../../config';
import Loader from '../../components/Loader/Loader';
export default class CasoExitoPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            casos:undefined,
            contacto:undefined
        };
    }
    componentDidMount(){
        setActiveItem(window.location.href);
        this.getCasos();
    }
    getCasos(){
        fetch(`${API}/caso-exito?limit=10`).then(res=>res.json()).then(casos=>{
            this.setState({casos:casos.data});
            this.getContactoData();
        })
    }

    getContactoData(){
        fetch(`${API}/contacto`).then(res=>res.json()).then(data=>{
            this.setState({contacto:data.data[0]});
            setTimeout(() => {
                for (let index = 0; index < document.getElementsByClassName('MuiPaper-root').length; index++) {
                    document.getElementsByClassName('MuiPaper-root')[index].classList.add('showCard');
                    document.getElementsByClassName('explicacion__exito')[index].classList.add('showExplicacionExito')
                }
            }, 10);
        })
    };

    render() {
        return (
            (this.state.casos === undefined || this.state.contacto === undefined)?<Loader/>:
            <>
                <Banner titulo="Agrogane - Casos de éxito" background="true"/>
                {this.state.casos.map(caso=>(
                   <CasoExito key={caso.idCaso} caso={caso} moreInfo="false"/> 
                ))}
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
