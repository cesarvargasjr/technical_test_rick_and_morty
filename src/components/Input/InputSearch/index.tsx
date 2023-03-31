import * as S from "./styles";

interface PropsInputSearch {
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
}

export const InputSearch = ({
  onChange,
  placeholder,
  value,
}: PropsInputSearch) => {
  return (
    <S.ContainerInput>
      <input
        className="input"
        type="search"
        maxLength={80}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </S.ContainerInput>
  );
};
