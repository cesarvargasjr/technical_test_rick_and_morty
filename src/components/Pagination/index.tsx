import { usePagination } from "../../context/pagination";
import * as S from "./styles";

interface PaginationProps {
  pageSize: number;
}

export const Pagination = ({ pageSize }: PaginationProps) => {
  const { currentPage, setCurrentPage } = usePagination();

  const PreviousPage = () => {
    if (currentPage === 1) {
      return <S.PreviousPage currentPage={currentPage}>{"<"}</S.PreviousPage>;
    } else {
      return (
        <S.PreviousPage
          currentPage={currentPage}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          {"<"}
        </S.PreviousPage>
      );
    }
  };

  const NextPage = () => {
    if (pageSize === undefined || pageSize === currentPage) {
      return (
        <S.NextPage pageSize={pageSize} currentPage={currentPage}>
          {">"}
        </S.NextPage>
      );
    } else {
      return (
        <S.NextPage
          pageSize={pageSize}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          {">"}
        </S.NextPage>
      );
    }
  };

  return (
    <S.ContainerPagination>
      <PreviousPage />
      <S.CurrentePage>{currentPage}</S.CurrentePage>
      <NextPage />
    </S.ContainerPagination>
  );
};
