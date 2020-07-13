import React,{useEffect,useState} from 'react';
import {API} from '../../config'
import './Footer.css';
const Footer = () => {
    const [data, setData] = useState(undefined);
    useEffect(() => {
        fetch(`${API}/contacto`).then(res=>res.json()).then(data=>{
            setData(data.data[0]);
        })
    }, [])
    return (
        (data===undefined?null:
        <footer className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <ul>
                        <li><i className="fas fa-phone-alt"></i> {data.telefonoPrincipal}</li>
                        <li><i className="fas fa-phone-alt"></i> {data.telefonoSecundario}</li>
                        <li><i className="fas fa-envelope"></i> {data.email}</li>
                    </ul>
                </div>
                <div className="col-12 d-flex justify-content-between row-final-footer container__redes">
                    <div className="redes">
                        <a href={data.twitter} target="blank"><i className="fab fa-twitter"></i></a>
                        <a href={data.instagram} target="blank"><i className="fab fa-instagram"></i></a>
                        <a href={data.facebook} target="blank"><i className="fab fa-facebook-f"></i></a>
                    </div>
                    <span className="text-muted">&copy; 2020 Agrogane. Todos los derechos reservados</span>
                </div>
            </div>
        </footer>
        )
    );
}
 
export default Footer;