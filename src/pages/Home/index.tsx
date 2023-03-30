import { useState, useEffect } from "react";
import { Card } from "../../components/Card";
import { GetAllCharacter } from "../../services/character";
import * as S from "./styles";

interface ResultProps {
  name: string;
  image: string;
  alt: string;
}

interface PropsData {
  results: ResultProps[];
}

export const Home = () => {
  const [data, setData] = useState<PropsData>();

  const Data = async () => {
    const response = await GetAllCharacter(2);
    setData(response);
  };

  useEffect(() => {
    Data();
  }, []);

  return (
    <S.ContainerPage>
      <S.ContainerFilters></S.ContainerFilters>
      <S.ContainerContent>
        <S.Title>Characters</S.Title>
        <S.Content>
          {data?.results?.map((item: any) => (
            <Card
              key={item?.id}
              name={item?.name}
              image={item?.image}
              alt={item?.name}
            />
          ))}
        </S.Content>
      </S.ContainerContent>
    </S.ContainerPage>
  );
};
