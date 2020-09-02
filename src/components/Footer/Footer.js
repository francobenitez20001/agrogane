import React from 'react';
import './Footer.css';
const Footer = ({telefonoPrincipal,telefonoSecundario,email,twitter,facebook,instagram}) => {
    console.log(facebook,instagram,twitter);
    return (
        <footer className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <ul>
                        <li><i className="fas fa-phone-alt"></i> {telefonoPrincipal}</li>
                        <li><i className="fas fa-phone-alt"></i>{telefonoSecundario}</li>
                        <li><i className="fas fa-envelope"></i><a target="blank" href={`mailto:${email}`} className="mx-2" id="email__footer">{email}</a></li>
                    </ul>
                </div>
                <div className="col-12 d-flex justify-content-between row-final-footer container__redes">
                    <div className="redes">
                        {(facebook.length<15)?null:<a href={facebook} target="blank"><i className="fab fa-facebook-f"></i></a>}
                        {(twitter == undefined || twitter.length<10)?null:<a href={twitter} target="blank"><i className="fab fa-twitter"></i></a>}
                        {(instagram == undefined || instagram.length<10)?null:<a href={instagram} target="blank"><i className="fab fa-instagram"></i></a>}
                    </div>
                    <span className="text-muted">&copy; 2020 Agrogane. Todos los derechos reservados</span>
                </div>
            </div>
        </footer>
        
    );
}
 
export default Footer;