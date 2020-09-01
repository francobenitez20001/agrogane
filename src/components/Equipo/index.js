import React,{useState} from 'react'
import Avatar from '../Avatar'
import './Equipo.css';
import Modal from '../Modal';
import ModalEquipo from '../ModalEquipo';
const Equipo = (props) => {
        const [modalIsOpen, setModalIsOpen] = useState(false);
    
        const abrirModalEquipo = data=>{
                setModalIsOpen(true);
        }

        const closeModal = ()=>(
                setModalIsOpen(false)
        )

    return (
        <>
                <div className="row my-4 mx-1">
                        <div className="col-12 col-sm-6 col-md-3 container__avatar" onClick={()=>abrirModalEquipo(props.autores[0])}>
                                <Avatar foto={props.autores[0].foto}
                                        nombre={props.autores[0].nombre}
                                        descripcion={props.autores[0].descripcion}
                                        tituloProfesional={props.autores[0].tituloProfesional}
                                        seccionEquipo={true}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 container__avatar" onClick={()=>abrirModalEquipo(props.autores[0])}>
                                <Avatar foto={props.autores[0].foto}
                                        nombre={props.autores[0].nombre}
                                        descripcion={props.autores[0].descripcion}
                                        tituloProfesional={props.autores[0].tituloProfesional}
                                        seccionEquipo={true}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 container__avatar" onClick={()=>abrirModalEquipo(props.autores[0])}>
                                <Avatar foto={props.autores[0].foto}
                                        nombre={props.autores[0].nombre}
                                        descripcion={props.autores[0].descripcion}
                                        tituloProfesional={props.autores[0].tituloProfesional}
                                        seccionEquipo={true}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 container__avatar" onClick={()=>abrirModalEquipo(props.autores[0])}>
                                <Avatar foto={props.autores[0].foto}
                                        nombre={props.autores[0].nombre}
                                        descripcion={props.autores[0].descripcion}
                                        tituloProfesional={props.autores[0].tituloProfesional}
                                        seccionEquipo={true}/>
                        </div>
                </div>
                {(!modalIsOpen)?null:
                        <Modal closeModal={closeModal}>
                                <ModalEquipo autor={props.autores[0]}/>
                        </Modal>
                }
        </>
    );
}
 
export default Equipo;