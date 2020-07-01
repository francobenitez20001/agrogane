import React, { Component } from 'react'
import Banner from '../../components/Banner/Banner';
import CasoExito from '../../components/CasoExito/CasoExito';
import Footer from '../../components/Footer/Footer';
import exitos from '../../casosExito.json';

export default class CasoExitoPage extends Component {
    constructor(props){
        super(props);
        this.exitos = exitos;
    }
    componentDidMount(){
        setTimeout(() => {
            for (let index = 0; index < document.getElementsByClassName('makeStyles-root-1').length; index++) {
                document.getElementsByClassName('makeStyles-root-1')[index].classList.add('showCard');
                document.getElementsByClassName('explicacion__exito')[index].classList.add('showExplicacionExito')
            }
        }, 10);
    }
    render() {
        return (
            <>
                <Banner titulo="Agrogane - Casos de éxito" background="true"/>
                {this.exitos.map(caso=>(
                   <CasoExito key={caso.id} caso={caso} moreInfo="false"/> 
                ))}
                <Footer/>
            </>
        )
    }
}
