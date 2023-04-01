import { useState, useEffect } from "react";
import { getAllCharacter, getCharacter } from "../../services/characters";
import { usePagination } from "../../context/pagination";
import { useSearchInput } from "../../context/inputSearch";
import { ModalCharacter } from "../../components/ModalCharacter";
import { Pagination } from "../../components/Pagination";
import { Card } from "../../components/Card";
import ImgSearchEmpty from "../../assets/searchEmpty.png";
import * as S from "./styles";

interface ResultProps {
  name: string;
  image: string;
  alt: string;
}

interface DataProps {
  results: ResultProps[];
  length?: number;
  info: {
    count: number;
    pages: number;
  };
}

interface SingleCharacterProps {
  name?: string;
  image?: string;
  status?: string;
  species?: string;
  gender?: string;
  origin?: {
    name?: string;
  };
}

export const Home = () => {
  const { value } = useSearchInput();
  const { currentPage } = usePagination();
  const [data, setData] = useState<DataProps>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [dataSingleCharacter, setDataSingleCharacter] = useState<any>();
  const [items] = useState([]);
  const pageSize: any = data?.info?.pages;

  const handleAllCharacter = async (value: string) => {
    const response = await getAllCharacter(value, currentPage);
    setData(response);
  };

  const handleSingleCharacter = async (id: number) => {
    const response = await getCharacter(id);
    setDataSingleCharacter(response);
  };

  useEffect(() => {
    handleAllCharacter(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, value]);

  const SearchEmpty = () => {
    if (data?.results?.length === 0 || data?.length === 0) {
      return (
        <S.ContainerSearchEmpty>
          <S.SearchEmptyImage src={ImgSearchEmpty} alt="busca não encontrada" />
          <S.Text>Busca não encontrada...</S.Text>
        </S.ContainerSearchEmpty>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      {showModal && (
        <ModalCharacter
          setShowModal={setShowModal}
          id={dataSingleCharacter?.id}
          name={dataSingleCharacter?.name}
          image={dataSingleCharacter?.image}
          status={dataSingleCharacter?.status}
          specie={dataSingleCharacter?.species}
          gender={dataSingleCharacter?.gender}
          origin={dataSingleCharacter?.origin?.name}
        />
      )}
      <S.ContainerPage>
        <S.ContainerFilters>FILTROS</S.ContainerFilters>
        <S.Content>
          <S.ContainerCharacters>
            <S.Title>
              Personagens
              <S.CountCharacters>
                ({data?.length === 0 ? "0" : data?.info?.count})
              </S.CountCharacters>
            </S.Title>
            {data?.results?.map((item: any) => (
              <Card
                key={item?.id}
                name={item?.name}
                image={item?.image}
                alt={item?.name}
                onClick={() => (
                  // eslint-disable-next-line no-sequences
                  setShowModal(true), handleSingleCharacter(item?.id)
                )}
              />
            ))}
            <SearchEmpty />
          </S.ContainerCharacters>
          <S.ContainerPagination>
            {items
              .slice((currentPage - 1) * pageSize, currentPage * pageSize)
              .map((item: any) => (
                <li key={item.id}>{item.name}</li>
              ))}
            <Pagination pageSize={pageSize} />
          </S.ContainerPagination>
        </S.Content>
      </S.ContainerPage>
    </>
  );
};
