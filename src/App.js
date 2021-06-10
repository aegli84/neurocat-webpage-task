import React from 'react';
import {Switch, Route} from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import Home from './pages/Home';
// import Products from './pages/Products';
// import Resources from './pages/Resources';
// import Team from './pages/Team';
// //import Career from './pages/Career';
// import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
{/* 
      <Route path="/Products">
        <Products />
      </Route>

      <Route path="/Resources">
        <Resources />
      </Route>

      <Route path="/Team">
        <Team />
      </Route>
      
      <Route path="/Career">
        <Career />
      </Route>
      <Route path="/Contact">
        <Contact />
      </Route> */}
    </Switch>
    </div>
  );
}

export default App;
