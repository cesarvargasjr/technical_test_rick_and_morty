import { InputSearch } from "../Input/InputSearch";
import { useSearchInput } from "../../context/inputSearch";
import RickAndMorty from "../../assets/rickAndMorty.png";
import * as S from "./styles";

export const Header = () => {
  const { value, setValue } = useSearchInput();

  const handleSearch = () => {
    setValue("");
  };

  return (
    <S.ContainerHeader>
      <S.Image
        src={RickAndMorty}
        alt="rick and morty"
        onClick={() => handleSearch()}
      />
      <S.ContainerInput>
        <InputSearch
          placeholder={"O que você procura?"}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </S.ContainerInput>
    </S.ContainerHeader>
  );
};
