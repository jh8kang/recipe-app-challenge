import React from "react";

function Pagination({ itemsPerPage, totalItems, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((num) => {
          return (
            <li key={num} className="page-item">
              <p onClick={() => paginate(num)} href="!#" className="page-link">
                {num}
              </p>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Pagination;
