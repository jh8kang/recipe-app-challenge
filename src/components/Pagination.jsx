import React from "react";

function Pagination({ itemsPerPage, totalItems }) {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(totalItems);
  return (
    <nav>
      hi
      <ul className="Pagination">
        {pageNumbers.map((num) => {
          <li key={num} className="page-item">
            hi
            {/* <a href="!#" className="page-link">
              {num}
            </a> */}
          </li>;
        })}
      </ul>
    </nav>
  );
}

export default Pagination;
