import { useState } from "react";
import { InputSearch } from "../Input/InputSearch";
import RickAndMorty from "../../assets/rickAndMorty.png";
import * as S from "./styles";

export const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <S.ContainerHeader>
      <S.Image src={RickAndMorty} alt="Rick and Morty" />
      <S.ContainerInput>
        <InputSearch
          placeholder={"O que você procura?"}
          onChange={(e) => setSearch(e.target.value)}
        />
      </S.ContainerInput>
    </S.ContainerHeader>
  );
};
