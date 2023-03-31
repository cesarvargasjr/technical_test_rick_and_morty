import { useState, useEffect } from "react";
import { Card } from "../../components/Card";
import { useSearchInput } from "../../context/inputSearch";
import { getCharacter } from "../../services/characters";
import ImgSearchEmpty from "../../assets/searchEmpty.png";
import * as S from "./styles";

interface ResultProps {
  name: string;
  image: string;
  alt: string;
}

interface PropsData {
  results: ResultProps[];
  length?: number;
}

export const Home = () => {
  const { value } = useSearchInput();
  const [data, setData] = useState<PropsData>();

  const handleCharacter = async (value: any) => {
    const response = await getCharacter(value);
    setData(response);
  };

  useEffect(() => {
    handleCharacter(value);
  }, [value]);

  const SearchEmpty = () => {
    if (data?.results?.length === 0 || data?.length === 0) {
      return (
        <S.ContainerSearchEmpty>
          <S.SearchEmpty src={ImgSearchEmpty} alt="busca não encontrada" />
          <S.Text>Busca não encontrada...</S.Text>
        </S.ContainerSearchEmpty>
      );
    } else {
      return null;
    }
  };

  return (
    <S.ContainerPage>
      <S.ContainerFilters>FILTROS</S.ContainerFilters>
      <S.Content>
        <S.Title>Personagens</S.Title>
        {data?.results?.map((item: any) => (
          <Card
            key={item?.id}
            name={item?.name}
            image={item?.image}
            alt={item?.name}
          />
        ))}
        <SearchEmpty />
      </S.Content>
    </S.ContainerPage>
  );
};
