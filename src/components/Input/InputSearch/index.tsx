import * as S from "./styles";

interface PropsInputSearch {
  placeholder: string;
  onChange: (e: any) => void;
}

export const InputSearch = ({ onChange, placeholder }: PropsInputSearch) => {
  return (
    <S.ContainerInput>
      <input
        className="input"
        type="search"
        placeholder={placeholder}
        onChange={onChange}
        maxLength={80}
      />
    </S.ContainerInput>
  );
};
