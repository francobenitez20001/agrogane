import React from 'react';
import './index.css';
const Avatar = (props) => {
    return (
        <div className="datos__dueño">
            <img src={`https://agrogane.com.ar/api/public/img/${props.foto}`} alt={props.nombre} className="img-fluid"/>
            <p className="dueño__nombre">{props.nombre}</p>
            <span className="text-muted">{(props.seccionEquipo)?props.cargo:props.tituloProfesional}</span>
            {(props.seccionEquipo)?null:
                <div>
                    <a className="mx-2" href={props.linkedin} target="blank"><i style={{fontSize:'28px',marginTop:'10px',color:'black'}} className="fab fa-linkedin"></i></a>
                    <a className="mx-2" href={`mailto:${props.email}`} target="blank"><i style={{fontSize:'28px',marginTop:'10px',color:'black'}} className="fas fa-envelope"></i></a>
                </div>
            }
        </div>
    );
}
 
export default Avatar;