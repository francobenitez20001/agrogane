import React, { Component } from 'react'
import './Banner.css';
export default class Banner extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        if(this.props.background!=null){document.getElementById('banner__servicios').classList.add('bg-image')};
    }
    render() {
        return (
            <div className="container-fluid banner__servicios animated fadeIn fast" id="banner__servicios">
                <div className="wrapper">
                    <div className="heading__wrapper">
                        <span className="indicator__top"></span>
                        <div className="col-md-8 heading__content">
                            <h1 className="heading__title">
                                <span>{this.props.titulo}</span>
                            </h1>
                            <div className="heading__description">
                                <p><span>{this.props.mensaje}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
