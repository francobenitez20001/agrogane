import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <footer className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <ul>
                        <li><i className="fas fa-phone-alt"></i> +54 911 53887713</li>
                        <li><i className="fas fa-phone-alt"></i> +54 911 53887713</li>
                        <li><i className="fas fa-envelope"></i> info@agrogane.com.ar</li>
                    </ul>
                </div>
                <div className="col-12 d-flex justify-content-between row-final-footer">
                    <div className="redes">
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-facebook-f"></i>
                    </div>
                    <span className="text-muted">&copy; 2020 Agrogane. Todos los derechos reservados</span>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;