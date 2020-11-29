import { createGlobalStyle } from 'styled-components';
import { Theme } from '../types/Theme';

const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    font-family: Roboto, Helvetica, Arial, sans-serif;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.onBackground};
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: all 0.25s linear;
  }
  
  [type="search"]::-webkit-search-cancel-button,
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
    appearance: none;
  }
  `;

export default GlobalStyles;
