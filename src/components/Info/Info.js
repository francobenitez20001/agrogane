import React from 'react';
import './Info.css';
const Info = () => {
    return (
        <>
            <div className="container-fluid" style={{backgroundColor:"#facc2e"}}>
                <div className="row py-5">
                    <div className="col-12 col-md-4">
                        <div className="caja-info">
                            <div className="icono">
                                <i className="fas fa-users"></i>
                            </div>
                            <h5>Titulo</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis obcaecati distinctio autem doloribus quas maiores sunt ducimus minus illo inventore iure ipsam minima architecto nam culpa perspiciatis sint quod, dolorum assumenda voluptates excepturi atque tempore voluptatem omnis. Velit, eius? Sunt, pariatur corrupti perferendis aliquam quidem at. Nisi ex sit magnam!</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="caja-info">
                            <div className="icono">
                                <i className="fas fa-leaf"></i>
                            </div>
                            <h5>Titulo</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis obcaecati distinctio autem doloribus quas maiores sunt ducimus minus illo inventore iure ipsam minima architecto nam culpa perspiciatis sint quod, dolorum assumenda voluptates excepturi atque tempore voluptatem omnis. Velit, eius? Sunt, pariatur corrupti perferendis aliquam quidem at. Nisi ex sit magnam!</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="caja-info">
                            <div className="icono">
                                <i className="fas fa-globe-asia"></i>
                            </div>
                            <h5>Titulo</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis obcaecati distinctio autem doloribus quas maiores sunt ducimus minus illo inventore iure ipsam minima architecto nam culpa perspiciatis sint quod, dolorum assumenda voluptates excepturi atque tempore voluptatem omnis. Velit, eius? Sunt, pariatur corrupti perferendis aliquam quidem at. Nisi ex sit magnam!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Info;