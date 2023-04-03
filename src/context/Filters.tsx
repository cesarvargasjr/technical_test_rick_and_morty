import { createContext, useContext, useState } from "react";

interface ContextProps {
  filter: {
    id: string;
    item: string;
  };
  setFilter: (args: any) => void;
}

export const FiltersContext = createContext({} as ContextProps);

function FilterProvider({ children }: any) {
  const [filter, setFilter] = useState({} as any);

  return (
    <FiltersContext.Provider value={{ filter, setFilter }}>
      {children}
    </FiltersContext.Provider>
  );
}

const useFilters = () => useContext(FiltersContext);

export { FilterProvider, useFilters };
