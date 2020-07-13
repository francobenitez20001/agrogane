import React, { Component } from 'react'
import Banner from '../../components/Banner/Banner';
import CasoExito from '../../components/CasoExito/CasoExito';
import Footer from '../../components/Footer/Footer';
import {setActiveItem} from '../../helpers/helpers';
import {API} from '../../config'
export default class CasoExitoPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            casos:undefined
        };
    }
    componentDidMount(){
        setActiveItem(window.location.href);
        this.getCasos();
    }
    getCasos(){
        fetch(`${API}/caso-exito?limit=10`).then(res=>res.json()).then(casos=>{
            this.setState({casos:casos.data});
            setTimeout(() => {
                for (let index = 0; index < document.getElementsByClassName('MuiPaper-root').length; index++) {
                    document.getElementsByClassName('MuiPaper-root')[index].classList.add('showCard');
                    document.getElementsByClassName('explicacion__exito')[index].classList.add('showExplicacionExito')
                }
            }, 10);
        })
    }
    render() {
        return (
            (this.state.casos === undefined)?null:
            <>
                <Banner titulo="Agrogane - Casos de éxito" background="true"/>
                {this.state.casos.map(caso=>(
                   <CasoExito key={caso.idCaso} caso={caso} moreInfo="false"/> 
                ))}
                <Footer/>
            </>
        )
    }
}
