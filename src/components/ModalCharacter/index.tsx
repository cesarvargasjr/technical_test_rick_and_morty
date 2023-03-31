import * as S from "./styles";

interface ModalProps {
  name: string;
  status: string;
  specie: string;
  gender: string;
  origin: string;
  image: string;
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
}: ModalProps) => {
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <S.Background onClick={closeModal} />
      <S.ContainerModal>
        <S.ImgCharacter src={image} alt="busca não encontrada" />
        <S.ContainerInfo>
          <S.ContainerInLineTitle>
            <S.Title>{name}</S.Title>
            <S.Status status={status}>{status}</S.Status>
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
