import styled from 'styled-components';
import colors from '../../styles/colors';

export const ContainerPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 10px 0;
`;

export const CurrentePage = styled.p`
  font-weight: 600;
  font-size: 19px;
  color: ${colors.white};
`;

export const NextPage = styled.p<{ currentPage?: number, pageSize?: number }>`
  font-weight: 600;
  font-size: 16px;
  color: ${({ pageSize, currentPage }) => pageSize !== currentPage ? colors.white : colors.grey};
  cursor: ${({ pageSize, currentPage }) => pageSize !== currentPage ? 'pointer' : 'default'};
  
  :hover {
    text-decoration: ${({ pageSize, currentPage }) => pageSize !== currentPage ? 'underline' : 'default'};
  }
`;

export const PreviousPage = styled.p<{ page?: number }>`
  font-weight: 600;
  font-size: 16px;
  color: ${({ page }) => page !== 1 ? colors.white : colors.grey};
  cursor: ${({ page }) => page !== 1 ? 'pointer' : 'default'};
  
  :hover {
    text-decoration: ${({ page }) => page !== 1 ? 'underline' : 'default'};
  }
`;