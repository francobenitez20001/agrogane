import React from 'react';
import {BrowserRouter , Route ,Switch} from 'react-router-dom';
import Layout from './components/Layout';

import Home from './pages/Home/Home';
import Nosotros from './pages/Nosotros/Nosotros';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/nosotros' component={Nosotros}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
