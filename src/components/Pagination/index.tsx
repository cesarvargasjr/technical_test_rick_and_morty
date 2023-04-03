import { usePagination } from "../../context/Pagination";
import * as S from "./styles";

export const Pagination = () => {
  const { currentPage, setCurrentPage, pageSize, pageList } = usePagination();

  const handleCurrentPage = (currentPage: any) => {
    if (currentPage !== "...") {
      setCurrentPage(Number(currentPage));
    }
  };

  const PreviousPage = () => {
    if (currentPage === 1) {
      return <S.PreviousPage currentPage={currentPage}>{"<"}</S.PreviousPage>;
    } else {
      return (
        <S.PreviousPage
          currentPage={currentPage}
          onClick={() => handleCurrentPage(currentPage - 1)}
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
          onClick={() => handleCurrentPage(currentPage + 1)}
        >
          {">"}
        </S.NextPage>
      );
    }
  };

  return (
    <S.ContainerPagination>
      <PreviousPage />
      {pageList.map((page: any, i: number) => (
        <S.CurrentePage
          key={i}
          onClick={() => handleCurrentPage(page)}
          className={currentPage === page ? "active" : ""}
        >
          {page}
        </S.CurrentePage>
      ))}
      <NextPage />
    </S.ContainerPagination>
  );
};
