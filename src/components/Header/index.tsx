import { InputSearch } from "../Input/InputSearch";
import { useSearchInput } from "../../context/inputSearch";
import { usePagination } from "../../context/pagination";
import RickAndMorty from "../../assets/rickAndMorty.png";
import * as S from "./styles";

export const Header = () => {
  const { value, setValue } = useSearchInput();
  const { setCurrentPage } = usePagination();

  const handleSearch = () => {
    setValue("");
    setCurrentPage(1);
  };

  return (
    <S.ContainerHeader>
      <S.Image
        src={RickAndMorty}
        alt="rick and morty"
        onClick={() => handleSearch()}
      />
      <S.Option>Favoritos</S.Option>
      <S.ContainerInput>
        <InputSearch
          placeholder={"O que você procura?"}
          value={value}
          // eslint-disable-next-line no-sequences
          onChange={(e) => (setValue(e.target.value), setCurrentPage(1))}
        />
      </S.ContainerInput>
    </S.ContainerHeader>
  );
};
