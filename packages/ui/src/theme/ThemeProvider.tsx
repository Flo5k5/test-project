import React, { FC, ReactNode, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { ThemeMode } from '../types';
import { GlobalStyles } from './GlobalStyles';
import { themes } from './themes';
import { getInitialThemeMode } from '../utils/getInitialThemeMode';
import { ThemeModeContext } from './ThemeModeContext';

interface ThemeWithModeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeWithModeProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(getInitialThemeMode());
  const toggleMode = () => {
    const mode = themeMode === 'light' ? 'dark' : 'light';
    window.localStorage.setItem('theme', mode);
    setThemeMode(mode);
  };

  return (
    <ThemeModeContext.Provider value={{ themeMode, toggleMode }}>
      <StyledThemeProvider theme={themes[themeMode]}>
        <>
          <GlobalStyles />
          {children}
        </>
      </StyledThemeProvider>
    </ThemeModeContext.Provider>
  );
};
