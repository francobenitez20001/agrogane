import React from 'react';
import nosotros from '../../img/nosotros.jpg';
import './Nosotros.css';
const Nosotros = () => {
    return (
        <div className="container-fluid px-0">
            <div className="row">
                <div className="col-md-6">
                    <img src={nosotros} alt={nosotros} className="img-fluid"/>
                </div>
                <div className="col-md-6">
                    <h2>Agrogane</h2>
                    <hr/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis iste laudantium praesentium quae alias accusantium provident minima velit temporibus autem nostrum neque, iusto consequatur tempora eaque soluta debitis harum nemo exercitationem asperiores expedita dolor assumenda. Illum facere possimus veniam enim. Fugiat eveniet aperiam exercitationem illum impedit illo eos molestias dolor?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis iste laudantium praesentium quae alias accusantium provident minima velit temporibus autem nostrum neque, iusto consequatur tempora eaque soluta debitis harum nemo exercitationem asperiores expedita dolor assumenda. Illum facere possimus veniam enim. Fugiat eveniet aperiam exercitationem illum impedit illo eos molestias dolor?
                    </p>
                </div>
            </div>
            <div className="jumbotron">
                h
            </div>
        </div>
    );
}
 
export default Nosotros;