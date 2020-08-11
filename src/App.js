import React from 'react';
import {BrowserRouter , Route ,Switch} from 'react-router-dom';
import Layout from './components/Layout';

import Home from './pages/Home/Home';
import Nosotros from './pages/Nosotros/Nosotros';
import Servicios from './pages/Servicios/Servicios';
import Articulos from './pages/Articulos/Articulos';
import CasoExitoPage from './pages/Caso-Exito/Caso-Exito';
import ArticuloSingle from './pages/Articulos/Single';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/nosotros' component={Nosotros}/>
            <Route exact path='/servicios' component={Servicios}/>
            <Route exact path='/articulos' component={Articulos}/>
            <Route exact path='/caso-exito' component={CasoExitoPage}/>
            <Route exact path='/articulo/:id' component={ArticuloSingle}/>
            <Route component={NotFound}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
