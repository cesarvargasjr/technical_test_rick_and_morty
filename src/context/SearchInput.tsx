import { createContext, useContext, useState } from "react";

interface ContextProps {
  value: string;
  setValue: (args: string) => void;
}

export const InputSearchContext = createContext({} as ContextProps);

function InputSearchProvider({ children }: any) {
  const [value, setValue] = useState("");

  return (
    <InputSearchContext.Provider value={{ value, setValue }}>
      {children}
    </InputSearchContext.Provider>
  );
}

const useSearchInput = () => useContext(InputSearchContext);

export { InputSearchProvider, useSearchInput };
