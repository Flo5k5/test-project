import { createContext } from 'react';
import { ThemeMode } from '../types/ThemeMode';
import { getInitialThemeMode } from '../utils/getInitialThemeMode';

interface ThemeModeContext {
  themeMode: ThemeMode;
  toggleMode(): void;
}

export const ThemeModeContext = createContext<ThemeModeContext>({
  themeMode: getInitialThemeMode(),
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleMode: () => {}, // NOOP
});
