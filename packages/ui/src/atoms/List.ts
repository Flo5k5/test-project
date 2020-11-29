import styled from 'styled-components';
import { maxWidthDevice } from '../theme';

interface ListProps {
  columns?: number;
}

const List = styled.ul<ListProps>`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  gap: 5px;

  & li {
    ${({ columns }) => columns && `width: calc(calc(100%/${columns}) - ${columns - 1}px)`}
  }

  @media ${maxWidthDevice.tablet} {
    gap: 4px;
    & li {
      ${({ columns }) => columns && `width: calc(calc(100%/${columns - 1}) - ${columns - 2}px)`}
    }
  }

  @media ${maxWidthDevice.mobileL} {
    gap: 3px;
    & li {
      ${({ columns }) => columns && `width: calc(calc(100%/${columns - 3}) - ${columns - 3}px)`}
    }
  }
`;

export default List;
