import React,{useState,useEffect} from 'react';
import Loader from '../../components/Loader/Loader';
import './style/Single.css';
import {API} from '../../config';
const SingleArticulo = (props) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(undefined);

    useEffect(() => {
        getData();
    }, [])

    const getData = async()=>{
        try {
            fetch(`${API}/articulos/${props.match.params.id}`).then(res=>res.json()).then(res=>{
                setData(res.data[0]);
                setLoading(false);
            })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        (loading)?<Loader/>:
        <>  
            <div className="wrapper-single-articulo container">
                <div className="row w-100" style={{marginLeft:"0px"}}>
                    {(data.imagen !== '')?
                        <>
                            <div className="col-12 col-md-6 py-3">
                                <img src={`https://agrogane.com.ar/api/public/img/${data.imagen}`} alt={data.titulo} className="img-fluid" style={{maxHeight:"380px"}}/>
                            </div>
                            <div className="col-12 col-md-6 py-3 d-flex align-items-center">
                                <h3 className="titulo-articulo-single mr-4">
                                    {data.titulo}
                                </h3>
                            </div>
                        </>
                    :
                        <div className="col-12 py-3 d-flex align-items-center">
                            <h3 className="titulo-articulo-single mr-4">
                                {data.titulo}
                            </h3>
                        </div>
                    }
                </div>
                <hr/>
                    <p>{data.resumen}</p>
                    <div className="moreInfo d-flex justify-content-between mb-4">
                        {(data.archivo !== "0" && data.archivo !== null && data.archivo !== '')?
                            (data.archivo.includes('.pdf') || data.archivo.includes('.doc'))?
                                <a download target="blank" href={`https://agrogane.com.ar/api/public/img/${data.archivo}`} style={{color:"#2e7737"}}>Ver articulo Completo</a>
                            :
                                <a target="blank" href={data.archivo} style={{color:"#2e7737"}}>Ver articulo Completo</a>            
                        :null}
                        <div className="info__testimonio text-right">
                            <img src={`https://agrogane.com.ar/api/public/img/${data.foto}`} alt={data.foto} className="img-fluid"/>
                            <p><span className="nombre__testimonio">{data.nombre},</span> {data.cargo}</p>
                        </div>
                    </div>
            </div>
        </>
    );
}
 
export default SingleArticulo;
