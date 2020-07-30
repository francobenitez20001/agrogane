import React from 'react';
import Banner from '../../components/Banner/Banner'
import ItemServicio from '../../components/ItemServicio/ItemServicio';
import Footer from '../../components/Footer/Footer';
import {API} from '../../config';
import Loader from '../../components/Loader/Loader';
import './Servicios.css';

import {setActiveItem} from '../../helpers/helpers';

const Servicios = () => {
    const [services, setservices] = React.useState(undefined);
    const [contacto, setContacto] = React.useState(undefined);
    React.useEffect(() => {
        setActiveItem(window.location.href);
        getServices();
    }, []);

    const getServices = async()=>{
        try {
            fetch(`${API}/servicios?limit=10`).then(res=>res.json()).then(data=>{
                setservices(data.data);
                getContactoData();
            });
        } catch (error) {
            console.log(error);
        }
    };

    const getContactoData = async()=>{
        fetch(`${API}/contacto`).then(res=>res.json()).then(data=>{
            setContacto(data.data[0]);
        })
    };

    return (
        (services === undefined || contacto === undefined)?<Loader/>:
        <>
            <Banner titulo="AgroGane Servicios"
                    mensaje="Junto con un grupo de profesionales de vasta experiencia, somos un
                    equipo de especialistas que garantizamos el máximo rendimiento de los
                    activos de nuestros clientes."/>
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
                        <ItemServicio key={ser.idServicio} servicio={ser}/>
                    ))}
                </div>
            </section>
            <Footer telefonoPrincipal={contacto.telefonoPrincipal}
                        telefonoSecundario={contacto.telefonoSecundario}
                        email={contacto.email}
                        twitter={contacto.twitter}
                        instagram={contacto.instagra}
                        facebook={contacto.facebook}/>
        </>
    );
}
export default Servicios;