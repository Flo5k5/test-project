import { Theme } from '../types/Theme';

export const themes: Record<string, Theme> = {
  light: {
    primary: '#60A5FA',
    onPrimary: '#FFFFFF',
    background: '#FFFFFF',
    onBackground: '#000000',
  },
  dark: {
    primary: '#1F2937',
    onPrimary: '#FFFFFF',
    background: '#4B5563',
    onBackground: '#FFFFFF',
  },
};
