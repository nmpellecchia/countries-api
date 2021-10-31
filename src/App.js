import './App.css';
//
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
////// Bootstrap imports //////
import 'bootstrap/dist/css/bootstrap.min.css';
///// Components ///////
import { Header } from './components/header/header.js';
import { MainBody } from './components/main/MainPage.js';
import { SelectedCountry } from './components/country/country';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/selected-country">
            <SelectedCountry />
          </Route>
          <Route path="/">
            <MainBody />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
