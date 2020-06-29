import React from 'react';
import './ListaArticulos.css';
const ListaArticulos = () => {
    const handleClickVerNota = id=>{
        console.log(id);
    }
    return (
        <div className="articulo__item" onClick={()=>handleClickVerNota(1)}>
            <div className="row w-100 row__articulos">
                <div className="col-3 imagen__articulo">
                    <img src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="img-fluid pl-3" alt="nota"/>
                </div>
                <div className="col-2 fecha text-center">
                    <span className="fecha__numero">12</span>
                    <span className="fecha__mes">Oct</span>
                </div>
                <div className="col-7 nota__info">
                    <p href="#" className="titulo__articulo">How to calculate fertilizer application rates</p>
                    <span className="autor text-muted">Franco Benitez</span>
                </div>
            </div>
        </div>
    );
}
 
export default ListaArticulos;