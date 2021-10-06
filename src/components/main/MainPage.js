import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';

// This component will handle the children (Pagination and countries)
// So it will have the logic

export function MainBody(props) {
  let items = [];
  for (let number = 1; number <= props.pages; number++) {
    items.push(
      <Pagination.Item key={number} active={false}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );
}
