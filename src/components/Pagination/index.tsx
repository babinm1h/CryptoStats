import React, { FC, useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setCurrentPage } from "../../redux/slices/currencies.slice";
import s from "./Pagination.module.scss";
import cn from "classnames";

interface IPaginationProps {
  totalCount: number;
  currentPage: number;
}

const Pagination: FC<IPaginationProps> = ({ totalCount, currentPage }) => {
  const dispatch = useAppDispatch();
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const pages = [];
  const pagesCount = 21;

  const handlePageChange = (pageNum: number) => {
    if (pageNum === 1) {
      setmaxPageNumberLimit(5);
      setminPageNumberLimit(0);
    } else {
      setmaxPageNumberLimit(pageNum + 3);
      setminPageNumberLimit(pageNum - 2);
    }
    dispatch(setCurrentPage(pageNum));
  };

  for (let i = 0; i < pagesCount; i++) {
    pages.push(i + 1);
  }

  const renderPageNumbers = pages.map((p) => {
    if (p < maxPageNumberLimit + 1 && p > minPageNumberLimit) {
      return (
        <div
          key={p}
          onClick={() => handlePageChange(p)}
          className={cn(s.page, {
            [s.activePage]: currentPage === p,
          })}
        >
          {p}
        </div>
      );
    } else {
      return null;
    }
  });

  return (
    <>
      <ul className={s.pagination}>{renderPageNumbers}</ul>
    </>
  );
};

export default Pagination;
