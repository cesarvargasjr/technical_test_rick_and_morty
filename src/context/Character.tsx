import api from "../services/api";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export interface CharacterProps {
  id: number;
  name: string;
  image: string;
  status?: string;
  species?: string;
  gender?: string;
  origin?: {
    name?: string;
  };
  info?: {
    pages: number;
  };
}

interface ContextProps {
  characters: CharacterProps[];
  setCharacters: (data: CharacterProps[]) => void;
  handleRedrawCharacters: () => void;
  redrawCharacter: boolean;
  characterState: string;
  setCharacterState: (characterState: CharacterState) => void;
}

export enum CharacterState {
  FAVORITES = "FAVORITES",
  ALL = "ALL",
}

export const CharacterContext = createContext({} as ContextProps);

function CharacterProvider({ children }: any) {
  const [characters, setCharacters] = useState<CharacterProps[]>([]);
  const [redrawCharacter, setRedrawCharacter] = useState(false);
  const [characterState, setCharacterState] = useState(CharacterState.ALL);

  const handleRedrawCharacters = () => setRedrawCharacter((v) => !v);

  const loadFilters = useCallback(async () => {
    try {
      let page = 1;
      let pages = 0;
      let data = {} as any;
      const filters: any = {
        status: [],
        species: [],
        types: [],
        genders: [],
        origins: [],
      };
      do {
        data = (await api.get(`/character/?page=${page++}`))?.data;
        pages = !data.info.prev ? data.info.pages : pages;

        data.results.reduce((ac: any, it: any) => {
          if (!ac.status.includes(it.status) && it.status)
            ac.status.push(it.status);
          if (!ac.species.includes(it.species) && it.species)
            ac.species.push(it.species);
          if (!ac.types.includes(it.type) && it.type) ac.types.push(it.type);
          if (!ac.genders.includes(it.gender) && it.gender)
            ac.genders.push(it.gender);
          if (!ac.origins.includes(it.origin?.name) && it.origin)
            ac.origins.push(it.origin.name);
          return ac;
        }, filters);

        localStorage.setItem("filters", JSON.stringify(filters));
      } while (data?.info?.next);
    } catch (error: any) {
      console.log(error);

      if (error?.response?.status === 404) {
        return [];
      }

      throw error;
    }
  }, []);

  useEffect(() => {
    loadFilters();
  }, []);

  return (
    <CharacterContext.Provider
      value={{
        characters,
        setCharacters,
        redrawCharacter,
        handleRedrawCharacters,
        characterState,
        setCharacterState,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}

const useCharacter = () => useContext(CharacterContext);

export { CharacterProvider, useCharacter };
