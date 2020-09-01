import React from 'react';
import './index.css';
const ModalEquipo = (props) => {
    console.log(props);
    return (
        <>
            <div className="header__modalEquipo">
                <img src={`https://agrogane.com.ar/api/public/img/${props.autor.foto}`} className="img-fluid" alt="Nombre"/>
                <h4>{props.autor.nombre}</h4>
            </div>
            <div className="main__modalEquipo">
                <p style={{whiteSpace:"break-spaces"}}>
                Con más de 35 años de experiencia en la localización, compra, asesoramiento y administración de campos en las pcia de Bs As, La Pampa, Corrientes. Ha liderado pooles de inversión agrícola ganaderos tanto con inversores nacionales como extranjeros.

                Ha implementado módulos de producción en cría y recría de hasta 5000has en la pcia de Corrientes.
                Ha  desarrollado planes de negocios en el sector avícola, efectivizando los mismos con desarrollo de granjas de ponedoras en el área de Cardales y Opendoor.

                Ha incursionado en el sector empresarial, ocupando cargos de gerente de administración en Papelera del Noa (inversión inicial 2millones de uss). Como gerente y director comercial de Linera Bonaerense SA (7millones de uss de facturación anual), potenciando sus habilidades administrativas como comerciales.
                </p>
            </div>
            <a href="https://agrogane.com.ar/api/public/img/avatar.jpeg" className="btn btn-success mt-3" style={{backgroundColor:"#2e7737"}} target="blank" download>Ver CV</a>
        </>
    );
}
 
export default ModalEquipo;