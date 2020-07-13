import React, { Component } from 'react'
import Banner from '../../components/Banner/Banner';
import ListaArticulos from '../../components/ListaArticulos/ListaArticulos';
import {setActiveItem} from '../../helpers/helpers';
import {API} from '../../config';
import Loader from '../../components/Loader/Loader';
export default class Articulos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articulos:undefined
        }
    }
    
    componentDidMount(){
        setActiveItem(window.location.href);
        this.getArticulos();
    }

    getArticulos(){
        fetch(`${API}/articulos?limit=50`).then(res=>res.json()).then(articulos=>{
            this.setState({articulos:articulos.data});
        })
    }

    render() {
        return (
            (this.state.articulos === undefined)?<Loader/>:
            <>
                <Banner titulo="Articulos" mensaje="" background="true"/>
                <hr/>
                <div className="container-fluid">
                    <div className="row">
                        {this.state.articulos.map(articulo=>(
                            <div className="col-12 col-md-4" key={articulo.idArticulo}>
                                <ListaArticulos foto={articulo.imagen}
                                                archivo={articulo.archivo}
                                                fecha={articulo.fecha}
                                                nombre={articulo.nombre}
                                                titulo={articulo.titulo}/>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}