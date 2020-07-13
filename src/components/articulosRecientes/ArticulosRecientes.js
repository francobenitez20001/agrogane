import React,{useState,useEffect} from 'react';
import ListaArticulos from '../ListaArticulos/ListaArticulos';
import {API} from '../../config';
import './ArticulosRecientes.css';
const ArticulosRecientes = () => {
    const [data, setData] = useState(undefined);
    useEffect(() => {
        fetch(`${API}/articulos?limit=3`).then(res=>res.json()).then(data=>{
            setData(data.data);
        })
    }, []);
    return (
        (data===undefined)?null:
        <>
            <h3 className="titulo_lista_articulos">Articulos Recientes</h3>
            <hr/>
            {data.map(articulo=>(
                <ListaArticulos key={articulo.idArticulo}
                                foto={articulo.imagen}
                                archivo={articulo.archivo}
                                fecha={articulo.fecha}
                                nombre={articulo.nombre}
                                titulo={articulo.titulo}/>
            ))}
        </>
    );
}
 
export default ArticulosRecientes;