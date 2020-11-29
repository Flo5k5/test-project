import styled from 'styled-components';

interface Title3Props {
  hasTextCentered?: boolean;
}

const Title3 = styled.h3<Title3Props>`
  ${({ hasTextCentered }) => hasTextCentered && 'text-align: center;'}
`;

export default Title3;
