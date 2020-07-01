import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
    const tops=[105,152,200,307,357,404];
    const handleOverLink = (show,index)=>{
        if(show){
            document.getElementsByClassName('item-menu')[index].classList.add('enlace__active');
            document.getElementById('headerPointer').style.top=`${tops[index]}px`;
            document.getElementById('headerPointer').style.left="0";
        }else{
            document.getElementsByClassName('item-menu')[index].classList.remove('enlace__active');
            document.getElementById('headerPointer').style.left="-32px";
        }
    };
    const handleClickMenu=()=>{
        document.getElementsByClassName('menu__container')[0].classList.toggle('ocultarMenu');
        document.getElementsByClassName('logo-title')[0].classList.toggle('d-none');
        document.getElementsByTagName('nav')[0].classList.toggle('showMenuMobile');
        document.getElementsByClassName('page')[0].classList.toggle('adaptarPage');
    }
    const handleClickOcultarMenu = ()=>{
        
    }
    return (
        <div className="menu__container">
            <div className="logo">
                <i onClick={handleClickMenu} className="fas fa-align-left icon-menu"></i>
                <h1 className="logo-title">Agrogane</h1>
                <h2 className="title-mobile">Agrogane</h2>
            </div>
            <nav>
                <span id="headerPointer" className="c-header__pointer"></span>
                <ul className="list__menu">
                    <li onMouseEnter={()=>handleOverLink(true,0)} 
                        onMouseLeave={() => handleOverLink(false,0)}>
                        <Link to="/" onClick={()=>handleClickOcultarMenu()} className="item-menu">Inicio</Link>
                    </li>
                    <li onMouseOver={()=>handleOverLink(true,1)}
                        onMouseLeave={() => handleOverLink(false,1)}>
                        <Link to="/servicios" onClick={()=>handleClickOcultarMenu()} className="item-menu">Servicios</Link>
                    </li>
                    <li onMouseOver={()=>handleOverLink(true,2)} 
                        onMouseLeave={() => handleOverLink(false,2)}>
                        <Link to="/nosotros" onClick={()=>handleClickOcultarMenu()} className="item-menu">Nosotros</Link>
                    </li>
                </ul>
                <ul className="list__menu">
                    <li onMouseOver={()=>handleOverLink(true,3)} 
                        onMouseLeave={() => handleOverLink(false,3)}>
                        <Link to="/articulos" onClick={()=>handleClickOcultarMenu()} className="item-menu">Articulos</Link>
                    </li>
                    <li onMouseOver={()=>handleOverLink(true,4)} 
                        onMouseLeave={() => handleOverLink(false,4)}>
                        <Link to="/caso-exito" onClick={()=>handleClickOcultarMenu()} className="item-menu">Casos de éxito</Link>
                    </li>
                    <li onMouseOver={()=>handleOverLink(true,5)} 
                        onMouseLeave={() => handleOverLink(false,5)}>
                        <a href="/" className="item-menu">Contacto</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
 
export default Navbar;