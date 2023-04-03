import { useState } from "react";
import { InputSearch } from "../Input/InputSearch";
import { useSearchInput } from "../../context/SearchInput";
import { usePagination } from "../../context/PaginationCharacters";
import { CharacterState, useCharacter } from "../../context/Character";
import { useFilters } from "../../context/Filters";
import RickAndMorty from "../../assets/rickAndMorty.png";
import * as S from "./styles";

export const Header = () => {
  const { value, setValue } = useSearchInput();
  const { setCurrentPage } = usePagination();
  const { setCharacterState } = useCharacter();
  const { setFilter } = useFilters();
  const [active, setActive] = useState("todos");

  const handleSearch = () => {
    setActive("todos");
    setValue("");
    setFilter("");
    setCurrentPage(1);
    setCharacterState(CharacterState.ALL);
  };

  const handleFilterFavorites = () => {
    setActive("favoritos");
    setCharacterState(CharacterState.FAVORITES);
  };

  const handleOpenMenuFiltersMobile = () => {
    setActive("filtros");
    const containerFilters = document.querySelector(".container-filters");
    containerFilters?.parentElement?.classList.add("open");

    const overlay = document.querySelector(".open .overlay");
    overlay?.addEventListener("click", () => {
      containerFilters?.parentElement?.classList.remove("open");
    });
  };

  const hasActive = (name: string) => (name === active ? "active" : "");

  return (
    <S.ContainerHeader>
      <S.Image
        src={RickAndMorty}
        alt="rick and morty"
        onClick={() => handleSearch()}
      />
      <S.Option
        className={hasActive("filtros") + " menu-filtros"}
        onClick={handleOpenMenuFiltersMobile}
      >
        Filtros
      </S.Option>
      <S.Option className={hasActive("todos")} onClick={handleSearch}>
        Todos
      </S.Option>
      <S.Option
        className={hasActive("favoritos")}
        onClick={handleFilterFavorites}
      >
        Favoritos
      </S.Option>
      <S.ContainerInput>
        <InputSearch
          placeholder={"Qual personagem você busca?"}
          value={value}
          // eslint-disable-next-line no-sequences
          onChange={(e) => (setValue(e.target.value), setCurrentPage(1))}
        />
      </S.ContainerInput>
    </S.ContainerHeader>
  );
};
