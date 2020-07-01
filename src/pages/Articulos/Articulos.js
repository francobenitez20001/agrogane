import React, { Component } from 'react'
import Banner from '../../components/Banner/Banner';
import ListaArticulos from '../../components/ListaArticulos/ListaArticulos';
export default class Articulos extends Component {
    render() {
        return (
            <>
                <Banner titulo="Articulos" mensaje="" background="true"/>
                <hr/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <ListaArticulos/>
                        </div>
                        <div className="col-12 col-md-4">
                            <ListaArticulos/>
                        </div>
                        <div className="col-12 col-md-4">
                            <ListaArticulos/>
                        </div>

                        <div className="col-12 col-md-4">
                            <ListaArticulos/>
                        </div>
                        <div className="col-12 col-md-4">
                            <ListaArticulos/>
                        </div>
                        <div className="col-12 col-md-4">
                            <ListaArticulos/>
                        </div>
                        <div className="col-12 col-md-4">
                            <ListaArticulos/>
                        </div>
                        <div className="col-12 col-md-4">
                            <ListaArticulos/>
                        </div>
                        <div className="col-12 col-md-4">
                            <ListaArticulos/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}