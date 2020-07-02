import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.tops=[105,152,200,307,357,404];
    }

    handleOverLink = (show,index)=>{
        if(show){
            document.getElementsByClassName('item-menu')[index].classList.add('enlace__active');
            document.getElementById('headerPointer').style.top=`${this.tops[index]}px`;
            document.getElementById('headerPointer').style.left="0";
        }else{
            document.getElementsByClassName('item-menu')[index].classList.remove('enlace__active');
            document.getElementById('headerPointer').style.left="-32px";
        }
    };
    handleClickMenu=()=>{
        document.getElementsByClassName('menu__container')[0].classList.toggle('ocultarMenu');
        document.getElementsByClassName('logo-title')[0].classList.toggle('d-none');
        document.getElementsByTagName('nav')[0].classList.toggle('showMenuMobile');
        document.getElementsByClassName('page')[0].classList.toggle('adaptarPage');
    }
    handleClickOcultarMenu = ()=>{
        document.getElementsByTagName('nav')[0].classList.remove('showMenuMobile');
        document.getElementsByClassName('menu__container')[0].classList.remove('ocultarMenu');
    }
    render() {
        return (
            <div className="menu__container">
                <div className="logo">
                    <i onClick={this.handleClickMenu} className="fas fa-align-left icon-menu"></i>
                    <h1 className="logo-title">Agrogane</h1>
                    <h2 className="title-mobile">Agrogane</h2>
                </div>
                <nav>
                    <span id="headerPointer" className="c-header__pointer"></span>
                    <ul className="list__menu">
                        <li onMouseEnter={()=>this.handleOverLink(true,0)} 
                            onMouseLeave={() => this.handleOverLink(false,0)}>
                            <Link name="inicio" to="/" onClick={()=>this.handleClickOcultarMenu()} className="item-menu">Inicio</Link>
                        </li>
                        <li onMouseOver={()=>this.handleOverLink(true,1)}
                            onMouseLeave={() => this.handleOverLink(false,1)}>
                            <Link name="servicios" to="/servicios" onClick={()=>this.handleClickOcultarMenu()} className="item-menu">Servicios</Link>
                        </li>
                        <li onMouseOver={()=>this.handleOverLink(true,2)} 
                            onMouseLeave={() => this.handleOverLink(false,2)}>
                            <Link name="nosotros" to="/nosotros" onClick={()=>this.handleClickOcultarMenu()} className="item-menu">Nosotros</Link>
                        </li>
                    </ul>
                    <ul className="list__menu">
                        <li onMouseOver={()=>this.handleOverLink(true,3)} 
                            onMouseLeave={() => this.handleOverLink(false,3)}>
                            <Link name="articulos" to="/articulos" onClick={()=>this.handleClickOcultarMenu()} className="item-menu">Articulos</Link>
                        </li>
                        <li onMouseOver={()=>this.handleOverLink(true,4)} 
                            onMouseLeave={() => this.handleOverLink(false,4)}>
                            <Link name="caso-exito" to="/caso-exito" onClick={()=>this.handleClickOcultarMenu()} className="item-menu">Casos de éxito</Link>
                        </li>
                        <li className="d-none" onMouseOver={()=>this.handleOverLink(true,5)} 
                            onMouseLeave={() => this.handleOverLink(false,5)}>
                            <a href="/" className="item-menu">Contacto</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

