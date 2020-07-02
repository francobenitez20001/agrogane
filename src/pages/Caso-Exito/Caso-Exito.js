import React, { Component } from 'react'
import Banner from '../../components/Banner/Banner';
import CasoExito from '../../components/CasoExito/CasoExito';
import Footer from '../../components/Footer/Footer';
import exitos from '../../casosExito.json';
import setActiveItem from '../../helpers/helpers';
export default class CasoExitoPage extends Component {
    constructor(props){
        super(props);
        this.exitos = exitos;
    }
    componentDidMount(){
        setActiveItem(window.location.href);
        setTimeout(() => {
            for (let index = 0; index < document.getElementsByClassName('MuiPaper-root').length; index++) {
                document.getElementsByClassName('MuiPaper-root')[index].classList.add('showCard');
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
