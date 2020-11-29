import styled from 'styled-components';
import { maxWidthDevice } from '../theme/devices';
import { Theme } from '../types/Theme';

interface HeaderProps {
  theme: Theme;
}

const Header = styled.header<HeaderProps>`
  display: grid;
  align-items: center;
  padding: 0 10px;
  ${({ theme }) =>
    theme &&
    `
    color:${theme.onPrimary};
    background-color: ${theme.primary};
  `}

  & a {
    color: inherit;
    text-decoration: none;
  }

  & > * {
    grid-column-start: 1;
    grid-row-start: 1;
    justify-self: center;
    align-items: center;
  }

  & > *:first-child {
    justify-self: left;
  }

  & > *:last-child {
    justify-self: right;

    @media ${maxWidthDevice.mobileL} {
      visibility: hidden;
    }
  }
`;

export default Header;
