import { React, useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

// This component will handle the children (Pagination and countries)
// So it will have the logic

export function MainBody(props) {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <PagesList
        pages={parseInt(props.pages)}
        currentPage={currentPage}
        clickHandler={setCurrentPage}
      ></PagesList>
    </div>
  );
}

function PagesList(props) {
  const [pageAmount, setPageAmount] = useState([]);

  useEffect(() => {
    const pagesTotal = parseInt(props.pages);
    const amount = [];
    for (let num = 1; num <= pagesTotal; num++) {
      amount.push(num);
    }
    setPageAmount(amount);
  }, [props.pages]);

  return (
    <div>
      <Pagination>
        {pageAmount.map((el, i) => {
          let items = [];

          if (i === 0) {
            items.push(
              <Pagination.Prev
                key={'page-prev'}
                disabled={props.currentPage > 1 ? false : true}
                onClick={e => {
                  e.preventDefault();
                  props.clickHandler(props.currentPage - 1);
                }}
              />
            );
          }
          items.push(
            <Pagination.Item
              key={i}
              /* id={i} */
              active={props.currentPage === el ? true : false}
              onClick={e => {
                e.preventDefault();
                props.clickHandler(e.target.id);
              }}
            >
              {i + 1}
            </Pagination.Item>
          );
          if (i === pageAmount.length - 1) {
            items.push(
              <Pagination.Next
                key={'page-next'}
                disabled={props.currentPage < props.pages ? false : true}
                onClick={e => {
                  e.preventDefault();
                  props.clickHandler(props.currentPage + 1);
                }}
              />
            );
          }
          return items;
        })}
      </Pagination>
    </div>
  );
}
