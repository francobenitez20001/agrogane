import React from 'react';

import './ListaArticulos.css';
import { Link } from 'react-router-dom';
const ListaArticulos = ({foto,archivo,fecha,nombre,titulo}) => {
    const setMesByNumber = numeroMes=>{
        let mes = '';
        switch (numeroMes) {
            case "01":
                mes = "Enero";
                break;
            case "02":
                mes = "Febrero";
                break;
            case "03":
                mes = "Marzo";
                break;
            case "04":
                mes = "Abril";
                break;
            case "05":
                mes = "Mayo";
                break;
            case "06":
                mes = "Junio";
                break;
            case "07":
                mes = "Julio";
                break;
            case "08":
                mes = "Agosto";
                break;
            case "09":
                mes = "Septiembre";
                break;
            case "10":
                mes = "Octubre";
                break;
            case "11":
                mes = "Noviembre";
                break;
            case "12":
                mes = "Diciembre"
                break;
            default:
                break;
        }
        return mes;
    }
    let mes = setMesByNumber(fecha.substr(5,2));
    let diaNumero = fecha.substr(8,2);
    return (
        <Link to="/articulo/1" style={{textDecoration:'none'}}>
            <div className="articulo__item">
                <div className="row w-100 row__articulos">
                    <div className="col-3 imagen__articulo">
                        <img src={foto} className="img-fluid pl-3" alt="nota"/>
                    </div>
                    <div className="col-2 fecha text-center">
                        <span className="fecha__numero">{diaNumero}</span>
                        <span className="fecha__mes">{mes.substr(0,3)}</span>
                    </div>
                    <div className="col-7 nota__info">
                        <p href="#" className="titulo__articulo">{titulo}</p>
                        <span className="autor text-muted">{nombre}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
 
export default ListaArticulos;