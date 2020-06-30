import React from 'react';
import './Info.css';
const Info = () => {
    return (
        <>
            <div className="container-fluid" style={{backgroundColor:"#facc2e"}}>
                <div className="row py-5">
                    <div className="col-12 col-md-4">
                        <div className="caja-info">
                            <div className="icono">
                                <i className="fas fa-users"></i>
                            </div>
                            <h5>Titulo</h5>
                            <p>Con más de 35 años de experiencia en la localización, compra, asesoramiento y administración de campos en las pcia de Bs As, La Pampa, Corrientes. Liderando pooles de inversión agrícola ganaderos tanto con inversores nacionales como extranjeros</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="caja-info">
                            <div className="icono">
                                <i className="fas fa-leaf"></i>
                            </div>
                            <h5>Titulo</h5>
                            <p>Implementado módulos de producción en cría y recría de hasta 5000has en la pcia. de Corrientes, desarrollando planes de negocios en el sector avícola, efectivizando los mismos con desarrollo de granjas de ponedoras en el área de Cardales y Opendoor.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="caja-info">
                            <div className="icono">
                                <i className="fas fa-globe-asia"></i>
                            </div>
                            <h5>Titulo</h5>
                            <p>Incursionando en el sector empresarial, ocupando cargos de gerente de administración en Papelera del Noa, como gerente y director comercial de Linera Bonaerense SA, potenciando sus habilidades administrativas como comerciales.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Info;