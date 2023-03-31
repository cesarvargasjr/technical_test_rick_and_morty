import { useState } from "react";
import IconHeartGrey from "../../assets/iconHeartGrey.svg";
import IconHeartRed from "../../assets/iconHeart.svg";
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

  const [likes, setLikes] = useState<any>();

  const handleLike = (id: number) => {
    if (!likes) {
      localStorage.setItem("likes", JSON.stringify([]));
      setLikes([]);
    }

    if (likes?.includes(id)) {
      console.log(id);
      likes.splice(likes.indexOf(id), 1);
    } else {
      likes?.push(id);
    }

    localStorage.setItem("likes", JSON.stringify(likes));
  };

  console.log("ID PERSONAGEM ===>>> ", id);
  console.log("FAVORITOS ===>>> ", likes);

  return (
    <>
      <S.Background onClick={closeModal} />
      <S.ContainerModal>
        <S.ImgCharacter src={image} alt="busca não encontrada" />
        <S.ContainerInfo>
          <S.Status status={status}>{status}</S.Status>
          <S.ContainerInLineTitle>
            <S.Title>{name}</S.Title>
            <S.Like
              src={IconHeartGrey}
              alt="icone favoritar"
              onClick={(e) => handleLike(id)}
            />
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
