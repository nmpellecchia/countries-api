import { React, useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

export function PagesList(props) {
  const [pageAmount, setPageAmount] = useState([]);

  useEffect(() => {
    // Create an array with the amount of pages
    const pagesTotal = parseInt(props.pages);
    const amount = [];
    for (let num = 1; num < pagesTotal; num++) {
      amount.push(num);
    }
    setPageAmount(amount);
  }, [props.pages]);

  return (
    <div>
      <Pagination>
        {pageAmount.map((el, i) => {
          // mapping an Arr to better manipulate the logic of the items
          // Doing it with others method gave too many errors
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
                props.clickHandler(el);
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
