import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Favorites from './components/Favorites/Favorites';

import "./App.css";


export default function App() {
  return (
    <Router>
      <nav class="dt w-100 border-box pa3 ph5-ns">
        <div class="dtc v-mid mid-gray link dim w-25" href="#" title="Home">
          <div>Weather App</div>
        </div>
        <div class="dtc v-mid w-75 tr">
          <Link to="/" class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns">home</Link>
          <Link to="/favorites" class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns">favorites</Link>
        </div>
      </nav>
    
      <Switch>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

