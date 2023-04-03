/* eslint-disable react-hooks/exhaustive-deps */
import { InputSearch } from "../Input/InputSearch";
import { useSearchInput } from "../../context/InputSearch";
import { usePagination } from "../../context/Pagination";
import { CharacterState, useCharacter } from "../../context/Character";
import { useFilters } from "../../context/Filters";
import RickAndMorty from "../../assets/rickAndMorty.png";
import * as S from "./styles";

export const Header = () => {
  const { value, setValue } = useSearchInput();
  const { setCurrentPage } = usePagination();
  const { setCharacterState } = useCharacter();
  const { setFilter } = useFilters();

  const handleSearch = () => {
    setValue("");
    setFilter("");
    setCurrentPage(1);
    setCharacterState(CharacterState.ALL);
  };

  const handleFilterFavorites = () => {
    setCharacterState(CharacterState.FAVORITES);
  };

  return (
    <S.ContainerHeader>
      <S.Image
        src={RickAndMorty}
        alt="rick and morty"
        onClick={() => handleSearch()}
      />
      <S.Option onClick={handleSearch}>Todos</S.Option>
      <S.Option onClick={handleFilterFavorites}>Favoritos</S.Option>
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
