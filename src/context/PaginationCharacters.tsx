import { createContext, useContext, useEffect, useState } from "react";

interface ContextProps {
  currentPage: number;
  pageList: any[];
  pageSize: number;
  setPageSize: (page: number) => void;
  setCurrentPage: (args: number) => void;
}

export const Pagination = createContext({} as ContextProps);

function PaginationProvider({ children }: any) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(1);
  const [pageList, setPageList] = useState([] as any);

  useEffect(() => {
    if (currentPage <= pageSize) {
      let begin = [];
      let end = [];
      let middle = [];

      if (currentPage < 5) {
        if (pageSize > 0) begin[0] = 1;
        if (pageSize > 1) begin[1] = 2;
        if (pageSize > 2) begin[2] = 3;
        if (pageSize > 3) begin[3] = 4;
        if (pageSize > 4) begin[4] = 5;

        if (pageSize === 6 && currentPage >= 4) begin[5] = 6;

        if (pageSize > 5) end[0] = 6;

        if (pageSize > 6) end[0] = "...";
        if (pageSize > 6) end[1] = pageSize;
      } else if (currentPage >= 5 && currentPage < pageSize - 3) {
        end = [];
        begin = [];
        begin[0] = 1;

        if (currentPage - 1 > 3) begin[1] = "...";

        if (currentPage - 1 > 1) middle[0] = currentPage - 1;
        if (currentPage - 1 > 2) middle[1] = currentPage;
        if (currentPage - 1 > 3) middle[2] = currentPage + 1;

        if (currentPage - 1 > 3 && currentPage < pageSize - 2) end[0] = "...";
        if (currentPage - 1 > 3 && currentPage < pageSize) end[1] = pageSize;
      } else if (currentPage <= pageSize) {
        begin = [];
        middle = [];
        end = [];

        if (pageSize > 6) {
          begin[0] = 1;
          begin[1] = "...";
        }

        if (pageSize - 4 <= pageSize) end[0] = pageSize - 4;
        if (pageSize - 3 <= pageSize) end[1] = pageSize - 3;
        if (pageSize - 2 <= pageSize) end[2] = pageSize - 2;
        if (pageSize - 1 <= pageSize) end[3] = pageSize - 1;
        end[4] = pageSize;
      }

      setPageList([...begin, ...middle, ...end].filter((e) => e));
    }
  }, [currentPage, pageSize]);

  return (
    <Pagination.Provider
      value={{ pageSize, setPageSize, pageList, currentPage, setCurrentPage }}
    >
      {children}
    </Pagination.Provider>
  );
}

const usePagination = () => useContext(Pagination);

export { PaginationProvider, usePagination };
