import * as S from "./styles";

export interface PropsCard {
  name: string;
  image: string;
  alt: string;
  location: string;
}

export const Card = ({ name, image, alt, location }: PropsCard) => {
  return (
    <S.ContainerCard>
      <S.Image src={image} alt={alt} />
      <S.Name>{name}</S.Name>
      <S.Location>{location}</S.Location>
    </S.ContainerCard>
  );
};
