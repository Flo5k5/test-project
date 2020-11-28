import { ThemeMode } from '../types/ThemeMode';

/**
 * String use to match color sheme stored in Media Query List.
 * https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
const MEDIA_QUERY_COLOR_SHEME_MATCH = '(prefers-color-scheme: dark)';

export const getInitialThemeMode = (): ThemeMode => {
  const localTheme = window.localStorage.getItem('theme') as ThemeMode;

  if (
    window.matchMedia &&
    window.matchMedia(MEDIA_QUERY_COLOR_SHEME_MATCH).matches &&
    !localTheme
  ) {
    window.localStorage.setItem('theme', 'dark');
    return 'dark';
  }

  if (localTheme) {
    return localTheme;
  }

  window.localStorage.setItem('theme', 'light');
  return 'light';
};
