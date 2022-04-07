import React from "react";

export const Pagination = ({ coinsPerPage, totalCoins, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="w-full flex justify-end p-2">
      <ul className="flex">
        {pageNumbers.map((page) => {
          return (
            <li
              key={page}
              onClick={() => paginate(page)}
              className="h-8 w-8 hover:bg-[#7755FF] cursor-pointer flex items-center justify-center"
            >
              {page}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
