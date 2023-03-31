import * as S from "./styles";

export interface CardProps {
  name: string;
  image: string;
  alt: string;
  onClick: () => void;
}

export const Card = ({ name, image, alt, onClick }: CardProps) => {
  return (
    <S.ContainerCard onClick={onClick}>
      <S.Image src={image} alt={alt} />
      <S.Name>{name}</S.Name>
    </S.ContainerCard>
  );
};
