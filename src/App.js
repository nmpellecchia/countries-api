import './App.css';
import { useEffect, useState } from 'react';

////// Bootstrap imports //////
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './components/header/header.js';
import { MainBody } from './components/main/MainPage.js';

function App() {
  return (
    <div className="App">
      <Header />
      <MainBody></MainBody>
    </div>
  );
}

export default App;
