import styled from 'styled-components';

interface Title2Props {
  hasTextCentered?: boolean;
}

export const Title2 = styled.h2<Title2Props>`
  font-size: 1.5em;
  ${({ hasTextCentered }) => hasTextCentered && 'text-align: center;'}
`;
