import React,{useEffect,useState} from 'react';
import './Testimonio.css';
import {API} from '../../config';
const Testimonio = () => {
    const [data, setData] = useState(undefined);
    useEffect(() => {
        fetch(`${API}/autor/1`).then(res=>res.json()).then(data=>{
            setData(data.data[0]);
        })
    }, [])
    return (
        (data === undefined)?null:
        <>
            <i className="fas fa-quote-left icono-testimonio"></i>
            <span className="text-muted testimonio">{data.testimonio}</span>
            <div className="info__testimonio">
                <img src={data.foto} alt={data.nombre} className="img-fluid"/>
                <p><span className="nombre__testimonio">{data.nombre},</span> {data.cargo}</p>
            </div>
        </>
    );
}
 
export default Testimonio;