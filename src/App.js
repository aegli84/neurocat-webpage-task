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

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      {/* <ParticlesBackground/> */}
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
    </Switch>
    <Footer/>
    </div>
  );
}

export default App;
