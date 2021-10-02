import './App.css';
import { useEffect } from 'react';

////// Bootstrap imports //////
import 'bootstrap/dist/css/bootstrap.min.css';
/* import Button from 'react-bootstrap/Button'; */
////// Components //////
import { getAllCountries } from './utilities/services/countries.js';
import { Header } from './components/header/header.js';

function App() {
  // useEffect is used to execute things that don't directly affect outputs
  useEffect(() => {
    getAllCountries();
  }, []); // An empty arr tells this effect to execute only once after initial rendering

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
