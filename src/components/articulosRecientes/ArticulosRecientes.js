import React from 'react';
import ListaArticulos from '../ListaArticulos/ListaArticulos';
import './ArticulosRecientes.css';
const ArticulosRecientes = () => {
    return (
        <>
            <h3 className="titulo_lista_articulos">Articulos Recientes</h3>
            <hr/>
            <ListaArticulos/>
            <ListaArticulos/>
            <ListaArticulos/>
        </>
    );
}
 
export default ArticulosRecientes;