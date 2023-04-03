import { useFilters } from "../../context/Filters";
import * as S from "./styles";

interface FilterProps {
  id: string;
  optionName: string;
  stateFilter: any;
  onClick: () => void;
}

export const Filter = ({
  optionName,
  onClick,
  stateFilter,
  id,
}: FilterProps) => {
  const { filter } = useFilters();

  return (
    <S.ContainerOption
      onClick={onClick}
      stateFilter={stateFilter}
      className={
        filter?.item === optionName && filter?.id === id ? "active" : ""
      }
    >
      <S.Option>{optionName}</S.Option>
    </S.ContainerOption>
  );
};
