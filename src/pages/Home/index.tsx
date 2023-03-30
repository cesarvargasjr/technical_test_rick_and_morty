import { useState, useEffect } from "react";
import { Card } from "../../components/Card";
import { GetAllCharacter } from "../../services/character";
import * as S from "./styles";

interface ResultProps {
  name: string;
  image: string;
  alt: string;
  location: string;
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

  console.log("**********", data);

  useEffect(() => {
    Data();
  }, []);

  return (
    <S.ContainerPage>
      {data?.results?.map((item: any) => (
        <Card
          name={item?.name}
          image={item?.image}
          alt={item?.name}
          location={item?.location?.name}
        />
      ))}
    </S.ContainerPage>
  );
};
