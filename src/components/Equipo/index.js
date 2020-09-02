import React,{useState} from 'react'
import Avatar from '../Avatar'
import './Equipo.css';
import Modal from '../Modal';
import ModalEquipo from '../ModalEquipo';
const Equipo = (props) => {
        const [modalIsOpen, setModalIsOpen] = useState(false);
        const [dataModal, setDataModal] = useState(undefined);
    
        const abrirModalEquipo = data=>{
                setDataModal(data);
                setModalIsOpen(true);
        }

        const closeModal = ()=>(
                setModalIsOpen(false)
        )

    return (
        <>
                <div className="row my-4 mx-1">
                        {props.autores.map(autor=>(
                                (autor.cargo == 'Founder')?null:
                                <div key={autor.idAutor} className="col-12 col-sm-6 col-md-3 container__avatar" onClick={()=>abrirModalEquipo(autor)}>
                                        <Avatar foto={autor.foto}
                                                nombre={autor.nombre}
                                                descripcion={autor.descripcion}
                                                cargo={autor.cargo}
                                                seccionEquipo={true}/>
                                </div>
                        ))}
                </div>
                {(!modalIsOpen)?null:
                        <Modal closeModal={closeModal}>
                                <ModalEquipo autor={dataModal}/>
                        </Modal>
                }
        </>
    );
}
 
export default Equipo;