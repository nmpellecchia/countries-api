import { React, useState, useEffect } from 'react';
////// Components //////
import { getAllCountries } from '../../utilities/services/countries.js';
import { PagesList } from './Pagination.js';
import { CountryList } from './Countries.js';

// This component will handle the children (Pagination and countries)
// So it will have the logic

export function MainBody(props) {
  // Keep track of what contents display,
  // The current page is needed for the CountryList
  // While the setter is used by the PageItems
  const [currentPage, setCurrentPage] = useState(1);

  const [isReady, setIsReady] = useState(false);
  /*  */
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
    getAllCountries().then(() => setIsReady(true));
  }, []); // An empty arr tells this effect to execute only once after initial rendering

  return (
    <div>
      <PagesList
        pages={getNumberOfPages()}
        currentPage={currentPage}
        clickHandler={setCurrentPage}
      ></PagesList>
      {!isReady ? (
        <div>loading</div>
      ) : (
        <CountryList currentPage={currentPage}></CountryList>
      )}
    </div>
  );
}
