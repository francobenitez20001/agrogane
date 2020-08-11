import React from 'react';
const NotFound = () => {
    return (
        <div className="container d-flex align-items-center justify-content-center" style={{height:'100vh',flexDirection:'column'}}>
            <h1>404</h1>
            <h4>Ups...</h4>
            <p style={{fontSize:'14px',textAlign:'center'}}>No pudimos encontrar lo que estás buscando, lo sentimos.</p>
        </div>
    );
}
 
export default NotFound;