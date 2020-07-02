import React from 'react';
import Banner from '../../components/Banner/Banner'
import ItemServicio from '../../components/ItemServicio/ItemServicio';
import Footer from '../../components/Footer/Footer';
import data from '../../servicios.json';
import './Servicios.css';

import setActiveItem from '../../helpers/helpers';

const Servicios = () => {
    const [services, setservices] = React.useState([]);
    React.useEffect(() => {
        setActiveItem(window.location.href);
        setservices(data);
    }, []);
    return (
        <>
            <Banner titulo="Agrogane Servicios"
                    mensaje="Junto con un grupo de profesionales de vasta experiencia, conforman un equipo de especialistas que garantizan el máximo rendimiento de los activos de nuestros clientes."/>
            <section className="section__servicios animated fadeIn fast">
                <div className="col-12">
                    <header className="col__separador c-separator--line">
                        <h3>
                            <span className="line"></span>
                            <span id="txt">Nuestros Servicios</span>
                        </h3>
                    </header>
                </div>
                <div className="col-12 item__container__servicios">
                    {services.map(ser=>(
                        <ItemServicio key={ser.id} servicio={ser}/>
                    ))}
                </div>
            </section>
            <Footer/>
        </>
    );
}
export default Servicios;