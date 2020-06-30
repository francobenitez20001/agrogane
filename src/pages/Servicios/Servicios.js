import React from 'react';
import ItemServicio from '../../components/ItemServicio/ItemServicio';
import Footer from '../../components/Footer/Footer';
import data from '../../servicios.json';
import './Servicios.css';
const Servicios = () => {
    const [services, setservices] = React.useState([]);
    React.useEffect(() => {
        setservices(data);
    }, []);
    return (
        <>
            <div className="container-fluid banner__servicios">
                <div className="wrapper">
                    <div className="heading__wrapper">
                        <span className="indicator__top"></span>
                        <div className="col-md-8 heading__content">
                            <h1 className="heading__title">
                                <span>El amplio espectro digital</span>
                            </h1>
                            <div className="heading__description">
                                <p><span>Junto con un grupo de profesionales de vasta experiencia, conforman un equipo de especialistas que garantizan el máximo rendimiento de los activos de nuestros clientes.</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section__servicios">
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