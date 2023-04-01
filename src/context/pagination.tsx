import { createContext, useContext, useState } from "react";

interface ContextProps {
  currentPage: number;
  setCurrentPage: (args: number) => void;
}

export const Pagination = createContext({} as ContextProps);

function PaginationProvider({ children }: any) {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </Pagination.Provider>
  );
}

const usePagination = () => useContext(Pagination);

export { PaginationProvider, usePagination };
