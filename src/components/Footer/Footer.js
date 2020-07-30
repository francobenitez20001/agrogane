import React from 'react';
import './Footer.css';
const Footer = ({telefonoPrincipal,telefonoSecundario,email,twitter,facebook,instagram}) => {
    return (
      
        <footer className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <ul>
                        <li><i className="fas fa-phone-alt"></i> {telefonoPrincipal}</li>
                        <li><i className="fas fa-phone-alt"></i> {telefonoSecundario}</li>
                        <li><i className="fas fa-envelope"></i> {email}</li>
                    </ul>
                </div>
                <div className="col-12 d-flex justify-content-between row-final-footer container__redes">
                    <div className="redes">
                        <a href={twitter} target="blank"><i className="fab fa-twitter"></i></a>
                        <a href={instagram} target="blank"><i className="fab fa-instagram"></i></a>
                        <a href={facebook} target="blank"><i className="fab fa-facebook-f"></i></a>
                    </div>
                    <span className="text-muted">&copy; 2020 Agrogane. Todos los derechos reservados</span>
                </div>
            </div>
        </footer>
        
    );
}
 
export default Footer;