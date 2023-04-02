import { useEffect, useState } from "react";
import { CharacterState, useCharacter } from "../../context/Character";
import IconHeartGrey from "../../assets/iconHeartGrey.svg";
import IconHeartRed from "../../assets/iconHeart.svg";
import IconClose from "../../assets/iconClose.svg";
import * as S from "./styles";

interface ModalProps {
  name: string;
  status: string;
  specie: string;
  gender: string;
  origin: string;
  image: string;
  id: number;
  setShowModal: (_: boolean) => void;
}

export const ModalCharacter = ({
  setShowModal,
  name,
  status,
  specie,
  gender,
  origin,
  image,
  id,
}: ModalProps) => {
  const closeModal = () => {
    setShowModal(false);
  };

  const { handleRedrawCharacters, redrawCharacter, characterState } =
    useCharacter();
  const [likes, setLikes] = useState<any>(
    JSON.parse(localStorage.getItem("likes") as any) || []
  );

  const character = likes?.find((e: any) => e.id === id);

  const handleRedraw = () => {
    handleRedrawCharacters();
  };

  const handleLike = (id: number) => {
    if (!likes) {
      localStorage.setItem("likes", JSON.stringify([]));
      setLikes([]);
    }

    if (character) {
      likes.splice(likes.indexOf(character), 1);
      if (characterState === CharacterState.FAVORITES) closeModal();
    } else {
      likes?.push({
        name,
        status,
        specie,
        gender,
        origin,
        image,
        id,
      });
    }

    localStorage.setItem("likes", JSON.stringify(likes));
    handleRedraw();
  };

  const LikeIcon = (id: number) => (character ? IconHeartRed : IconHeartGrey);

  useEffect(() => {}, [redrawCharacter]);

  return (
    <>
      <S.Background onClick={closeModal} />
      <S.ContainerModal>
        <S.ImgCharacter src={image} alt="busca não encontrada" />
        <S.ContainerInfo>
          <S.Status status={status}>{status}</S.Status>
          <S.ContainerInLineTitle>
            <S.Title>
              {name}
              <S.Like
                src={LikeIcon(id)}
                alt="icone favoritar"
                onClick={() => handleLike(id)}
                title={
                  character
                    ? "Remover dos favoritos"
                    : "Adicionar aos favoritos"
                }
              />
            </S.Title>
            <S.ContainerOptions>
              <S.Close src={IconClose} onClick={closeModal} title="Fechar" />
            </S.ContainerOptions>
          </S.ContainerInLineTitle>
          <S.ContainerInLine>
            <S.SubtitleInfo>Espécie:</S.SubtitleInfo>
            <S.ItemInfo>{specie}</S.ItemInfo>
          </S.ContainerInLine>
          <S.ContainerInLine>
            <S.SubtitleInfo>Gênero:</S.SubtitleInfo>
            <S.ItemInfo>{gender}</S.ItemInfo>
          </S.ContainerInLine>
          <S.ContainerInLine>
            <S.SubtitleInfo>Origem:</S.SubtitleInfo>
            <S.ItemInfo>{origin}</S.ItemInfo>
          </S.ContainerInLine>
        </S.ContainerInfo>
      </S.ContainerModal>
    </>
  );
};
