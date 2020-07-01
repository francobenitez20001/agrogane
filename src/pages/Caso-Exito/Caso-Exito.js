import React, { Component } from 'react'
import Banner from '../../components/Banner/Banner';
import CasoExito from '../../components/CasoExito/CasoExito';
import Footer from '../../components/Footer/Footer';

export default class CasoExitoPage extends Component {
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
                <CasoExito moreInfo="false"/>
                <CasoExito moreInfo="false"/>
                <CasoExito moreInfo="false"/>
                <Footer/>
            </>
        )
    }
}
