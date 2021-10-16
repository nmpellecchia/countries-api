import { React, useState } from 'react';
import { PagesList } from './Pagination.js';
import { CountryList } from './Countries.js';

// This component will handle the children (Pagination and countries)
// So it will have the logic

export function MainBody(props) {
  // Keep track of what contents display,
  // The current page is needed for the CountryList
  // While the setter is used by the PageItems
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <PagesList
        pages={parseInt(props.pages)}
        currentPage={currentPage}
        clickHandler={setCurrentPage}
      ></PagesList>
      <CountryList currentPage={currentPage}></CountryList>
    </div>
  );
}
