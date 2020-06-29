import React from 'react';
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
        document.getElementsByTagName('nav')[0].classList.toggle('d-none');
        document.getElementsByTagName('nav')[0].classList.toggle('showMenuMobile');
        document.getElementsByClassName('page')[0].classList.toggle('adaptarPage');
    }
    return (
        <div className="menu__container">
            <div className="logo">
                <i onClick={handleClickMenu} className="fas fa-bars icon-menu"></i>
                <h1 className="logo-title">Agrogane</h1>
                <h2 className="title-mobile">Agrogane</h2>
            </div>
            <nav>
                <span id="headerPointer" className="c-header__pointer"></span>
                <ul className="list__menu">
                    <li onMouseEnter={()=>handleOverLink(true,0)} 
                        onMouseLeave={() => handleOverLink(false,0)}>
                        <a href="/" className="item-menu">Inicio</a>
                    </li>
                    <li onMouseOver={()=>handleOverLink(true,1)}
                        onMouseLeave={() => handleOverLink(false,1)}>
                        <a href="/" className="item-menu">Servicios</a>
                    </li>
                    <li onMouseOver={()=>handleOverLink(true,2)} 
                        onMouseLeave={() => handleOverLink(false,2)}>
                        <a href="/nosotros" className="item-menu">Nosotros</a>
                    </li>
                </ul>
                <ul className="list__menu">
                    <li onMouseOver={()=>handleOverLink(true,3)} 
                        onMouseLeave={() => handleOverLink(false,3)}>
                        <a href="/" className="item-menu">Articulos</a>
                    </li>
                    <li onMouseOver={()=>handleOverLink(true,4)} 
                        onMouseLeave={() => handleOverLink(false,4)}>
                        <a href="/" className="item-menu">Casos de éxito</a>
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