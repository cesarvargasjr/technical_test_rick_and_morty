import * as S from "./styles";

export interface PropsCard {
  name: string;
  image: string;
  alt: string;
}

export const Card = ({ name, image, alt }: PropsCard) => {
  return (
    <S.ContainerCard>
      <S.Image src={image} alt={alt} />
      <S.Name>{name}</S.Name>
    </S.ContainerCard>
  );
};
