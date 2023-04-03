import styled from 'styled-components';
import colors from '../../styles/colors';

export const ContainerPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 10px;  
`;

export const CurrentePage = styled.p`
  font-weight: 600;
  font-size: 21px;
  line-height: 30px;
  color: ${colors.white};
  cursor: pointer;

  &.active {
    color: ${colors.blue}
  }
`;

export const NextPage = styled.p<{ currentPage?: number, pageSize?: number }>`
  font-weight: 400;
  font-size: 26px;
  line-height: 32px;
  color: ${({ pageSize, currentPage }) =>
    pageSize === undefined || pageSize === currentPage ?
      colors.grey : colors.white
  };
  cursor: ${({ pageSize, currentPage }) =>
    pageSize === undefined || pageSize === currentPage ?
      'default' : 'pointer'
  };

  :hover {
    color: ${({ pageSize, currentPage }) =>
    pageSize === undefined || pageSize === currentPage ?
      'default' : colors.blue
  };
  }
`;

export const PreviousPage = styled.p<{ currentPage?: number }>`
  font-weight: 400;
  font-size: 26px;
  line-height: 32px;
  color: ${({ currentPage }) => currentPage !== 1 ? colors.white : colors.grey};
  cursor: ${({ currentPage }) => currentPage !== 1 ? 'pointer' : 'default'};

  :hover {
    color: ${({ currentPage }) => currentPage !== 1 ? colors.blue : 'default'};
  }
`;