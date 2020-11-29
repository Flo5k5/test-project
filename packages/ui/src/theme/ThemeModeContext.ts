import { createContext } from 'react';
import { ThemeMode } from '../types/ThemeMode';
import getInitialThemeMode from '../utils/getInitialThemeMode';

interface ThemeModeContext {
  themeMode: ThemeMode;
  toggleMode(): void;
}

const ThemeModeContext = createContext<ThemeModeContext>({
  themeMode: getInitialThemeMode(),
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleMode: () => {}, // NOOP
});

export default ThemeModeContext;
