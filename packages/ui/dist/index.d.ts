interface Theme {
    primary: string;
    onPrimary: string;
    background: string;
    onBackground: string;
}
interface CardListItem {
    id: number;
    title: string;
    imageSource: string;
}
/**
 * Mode to be used in Dark Mode feature.
 */
type ThemeMode = "light" | "dark";
declare const devices: {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tablet: string;
    laptop: string;
    laptopL: string;
    desktop: string;
};
declare const minWidthDevice: {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tablet: string;
    laptop: string;
    laptopL: string;
    desktop: string;
    desktopL: string;
};
declare const maxWidthDevice: {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tablet: string;
    laptop: string;
    laptopL: string;
    desktop: string;
    desktopL: string;
};
declare const themes: Record<string, Theme>;
export { default as BrokenImage, default as CardOverlay, default as Image, default as Input, default as InlineFlex, default as List, default as ListItem, default as MaterialIcon, default as Text, default as Tile, default as Title2, default as Title3, default as Card, default as Container, default as ContentWrapper, default as DarkModeToggleButton, default as Header, default as SearchBar, default as TileBoard, default as ToggleButton, default as Article, default as CardList, default as GlobalStyles, default as ThemeModeContext, default as ThemeProvider, default as getInitialThemeMode, CardListItem, devices, minWidthDevice, maxWidthDevice, themes, Theme, ThemeMode };
