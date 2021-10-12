import './App.css';
import { useEffect } from 'react';

////// Bootstrap imports //////
import 'bootstrap/dist/css/bootstrap.min.css';
/* import Button from 'react-bootstrap/Button'; */
////// Components //////
import { getAllCountries } from './utilities/services/countries.js';
import { Header } from './components/header/header.js';
import { MainBody } from './components/main/MainPage.js';

function App() {
  /* const MAX_COUNTRIES = 25; */
  const getNumberOfPages = () => {
    let amountOfPages = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const regex = /(countries_)/gi;
      if (localStorage.key(i).match(regex)) {
        amountOfPages++;
      }
    }
    return amountOfPages;
  };

  // useEffect is used to execute things that don't directly affect outputs
  useEffect(() => {
    getAllCountries();
  }, []); // An empty arr tells this effect to execute only once after initial rendering

  return (
    <div className="App">
      <Header />
      <MainBody pages={getNumberOfPages()}></MainBody>
    </div>
  );
}

export default App;
