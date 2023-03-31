import * as S from "./styles";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: any;
  pageSize: number;
}

export const Pagination = ({
  currentPage,
  setCurrentPage,
  pageSize,
}: PaginationProps) => {
  const PreviousPage = () => {
    if (currentPage === 1) {
      return <S.PreviousPage page={currentPage}>Anterior</S.PreviousPage>;
    } else {
      return (
        <S.PreviousPage
          page={currentPage}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Anterior
        </S.PreviousPage>
      );
    }
  };

  const NextPage = () => {
    if (currentPage === pageSize) {
      return (
        <S.NextPage currentPage={currentPage} pageSize={pageSize}>
          Próximo
        </S.NextPage>
      );
    } else {
      return (
        <S.NextPage
          currentPage={currentPage}
          pageSize={pageSize}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Próximo
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
