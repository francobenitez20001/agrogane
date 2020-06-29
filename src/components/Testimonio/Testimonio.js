import React from 'react';
import './Testimonio.css';
import avatar from '../../img/avatar.jpeg'
const Testimonio = () => {
    return (
        <>
            <i className="fas fa-quote-left icono-testimonio"></i>
            <span className="text-muted testimonio">My strong belief is that only by combining knowledge dissemination and great technologies, we can face present and future challenges in agriculture.</span>
            <div className="info__testimonio">
                <img src={avatar} alt="avatar" className="img-fluid"/>
                <p><span className="nombre__testimonio">Michel Huvelle,</span> Founder</p>
            </div>
        </>
    );
}
 
export default Testimonio;