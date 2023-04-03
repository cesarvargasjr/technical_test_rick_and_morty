import { useState, useEffect } from "react";
import { getAllCharacter, getCharacter } from "../../services/characters";
import { usePagination } from "../../context/Pagination";
import { useSearchInput } from "../../context/InputSearch";
import { ModalCharacter } from "../../components/ModalCharacter";
import { Pagination } from "../../components/Pagination";
import { Card } from "../../components/Card";
import { Filter } from "../../components/Filter";
import { useFilters } from "../../context/Filters";
import {
  CharacterState,
  CharacterProps,
  useCharacter,
} from "../../context/Character";
import ImgSearchEmpty from "../../assets/searchEmpty.png";
import * as S from "./styles";

interface InfoProps {
  count: number;
  pages: number;
}

interface SingleCharacterProps {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
}

export const Home = () => {
  const { value } = useSearchInput();
  const { filter, setFilter } = useFilters();
  const { currentPage, setPageSize, pageSize } = usePagination();
  const {
    characters,
    setCharacters,
    characterState,
    redrawCharacter,
    handleRedrawCharacters,
  } = useCharacter();
  const [dataSingleCharacter, setDataSingleCharacter] =
    useState<SingleCharacterProps>({} as SingleCharacterProps);
  const [info, setInfo] = useState<InfoProps>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [items] = useState([]);

  const filterOptions =
    JSON.parse(localStorage.getItem("filters") as string) || [];

  const handleFilter = (item: string, id: string) => {
    if (!filter?.item) {
      setFilter({ item, id });
    } else if (filter?.item === item && filter?.id === id) {
      setFilter("");
    } else if (filter?.item !== item || filter?.id === id) {
      setFilter({ item, id });
    }
  };

  const status = filter?.item && filter?.id === "status" ? filter?.item : "";
  const gender = filter?.item && filter?.id === "gender" ? filter?.item : "";
  const species = filter?.item && filter?.id === "species" ? filter?.item : "";

  const handleAllCharacter = async (value: string) => {
    if (characterState === CharacterState.ALL) {
      const response = await getAllCharacter(
        value,
        currentPage,
        status,
        gender,
        species
      );
      setInfo({ count: response?.info.count, pages: response?.info.pages });
      setCharacters(response?.results as CharacterProps[]);
      setPageSize(response?.info.pages);
    } else if (characterState === CharacterState.FAVORITES) {
      const favoriteCharacters = localStorage.getItem("likes")
        ? JSON.parse(localStorage.getItem("likes") as string)
        : [];

      const searchItem = (value: string) =>
        favoriteCharacters.filter((character: CharacterProps) =>
          character.name.toLowerCase().includes(value)
        );

      setCharacters(value ? searchItem(value) : favoriteCharacters);
    }
  };

  const handleSingleCharacter = async (id: number) => {
    const response = await getCharacter(id);
    setDataSingleCharacter(response);
  };

  const CountCharacters = () => (
    <S.ContainerCharacters>
      (
      {characterState === CharacterState.FAVORITES
        ? characters.length
        : characters.length === 0
        ? "0"
        : info?.count}
      )
    </S.ContainerCharacters>
  );

  const DeleteAllFavorites = () => {
    const [showConfirm, setShowConfirm] = useState(false);

    const handleDeleteAllFavorites = () => {
      setCharacters([]);
      localStorage.setItem("likes", JSON.stringify([]));
      handleRedrawCharacters();
      setShowConfirm(false);
    };

    useEffect(() => {
      if (showConfirm) {
        const time = setTimeout(() => {
          setShowConfirm(false);
          clearTimeout(time);
        }, 5000);
      }
    }, [showConfirm]);

    const ConfirmDelete = () => (
      <S.DeleteAllFavorites>
        <span className="confirm" onClick={() => handleDeleteAllFavorites()}>
          ✔ Confirmar
        </span>
        <span className="cancel" onClick={() => setShowConfirm(false)}>
          ✕ Cancelar
        </span>
      </S.DeleteAllFavorites>
    );

    return characterState === CharacterState.FAVORITES &&
      characters.length > 0 ? (
      showConfirm ? (
        <ConfirmDelete />
      ) : (
        <S.DeleteAllFavorites onClick={() => setShowConfirm(true)}>
          <span>Remover todos</span>
        </S.DeleteAllFavorites>
      )
    ) : null;
  };

  const PaginationHome = () =>
    characterState === CharacterState.ALL ? <Pagination /> : null;

  useEffect(() => {
    handleAllCharacter(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, value, characterState, redrawCharacter, filter]);

  const SearchEmpty = () => {
    if (characters.length === 0 || characters.length === 0) {
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
          id={dataSingleCharacter.id}
          name={dataSingleCharacter.name}
          image={dataSingleCharacter.image}
          status={dataSingleCharacter.status}
          specie={dataSingleCharacter.species}
          gender={dataSingleCharacter.gender}
          origin={dataSingleCharacter.origin?.name || ""}
        />
      )}
      <S.ContainerPage>
        <S.ContainerFilters>
          <S.TitleFilter>Filtros</S.TitleFilter>
          <S.SubtitleFilter>Status</S.SubtitleFilter>
          {filterOptions?.status?.map((item: string) => (
            <Filter
              key={item}
              id={"status"}
              optionName={item}
              stateFilter={filter}
              onClick={() => handleFilter(item, "status")}
            />
          ))}
          <S.SubtitleFilter>Gênero</S.SubtitleFilter>
          {filterOptions?.genders?.map((item: string) => (
            <Filter
              key={item}
              id={"gender"}
              optionName={item}
              stateFilter={filter}
              onClick={() => handleFilter(item, "gender")}
            />
          ))}
          <S.SubtitleFilter>Espécies</S.SubtitleFilter>
          {filterOptions?.species?.map((item: string) => (
            <Filter
              key={item}
              id={"species"}
              optionName={item}
              stateFilter={filter}
              onClick={() => handleFilter(item, "species")}
            />
          ))}
        </S.ContainerFilters>
        <S.Content>
          <S.ContainerCharacters>
            <S.Title>
              Personagens
              <CountCharacters />
              <DeleteAllFavorites />
            </S.Title>
            {characters?.map((item: CharacterProps) => (
              <Card
                key={item.id}
                name={item.name}
                image={item.image}
                alt={item.name}
                onClick={() => (
                  // eslint-disable-next-line no-sequences
                  setShowModal(true), handleSingleCharacter(item.id)
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
            <PaginationHome />
          </S.ContainerPagination>
        </S.Content>
      </S.ContainerPage>
    </>
  );
};
