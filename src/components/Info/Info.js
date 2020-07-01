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
                            <p>Ayudamos a nuestros clientes a mejorar sus resultados a través de la transformación del negocio, partiendo desde la definición estratégica hasta la mejora operativa, la redefinición de los procesos productivos y la implementación tecnológica necesaria. </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="caja-info">
                            <div className="icono">
                                <i className="fas fa-leaf"></i>
                            </div>
                            <h5>Titulo</h5>
                            <p>Acompañamos la decisión de inversión para maximizar el retorno, pero asegurando la relación riesgo-retorno de acuerdo al perfil de cada inversor y a sus objetivos. </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="caja-info">
                            <div className="icono">
                                <i className="fas fa-globe-asia"></i>
                            </div>
                            <h5>Titulo</h5>
                            <p>Segmentamos nuestras soluciones de inversión en BIG (+2M U$S), MID (500K-1.9M U$S), SMALL (100K-499K U$S) y FIRST INVESTMENT (10K-99k U$S), adaptando los planes de negocio y las soluciones a cada tipo de inversor. </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Info;