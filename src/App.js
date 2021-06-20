import React from 'react';
import {Switch, Route} from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import Home from './pages/Home';
import Footer from './components/Footer'
//import ParticlesBackground from './components/ParticlesBackground'
import Products from './pages/Products';
import Resources from './pages/Resources';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Labs from './pages/Labs';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/Products">
        <Products />
      </Route>

      <Route path="/Resources">
        <Resources />
      </Route>

      <Route path="/Career">
        <Career />
      </Route>

      <Route path="/Contact">
        <Contact />
      </Route> 

      <Route path="/Labs">
        <Labs />
      </Route> 

      <Route path="/Login">
        <Login />
      </Route> 
    </Switch>
    <Footer/>
    </div>
  );
}

export default App;
