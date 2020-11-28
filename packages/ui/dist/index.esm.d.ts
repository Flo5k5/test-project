/// <reference types="styled-components" />
/// <reference types="react" />
import { FC, ReactNode } from "react";
declare const BrokenImage: FC;
interface Theme {
    primary: string;
    onPrimary: string;
    background: string;
    onBackground: string;
}
interface OverlayCardProps {
    isVisible?: boolean;
    theme: Theme;
}
declare const CardOverlay: import("styled-components").StyledComponent<"div", any, OverlayCardProps, never>;
interface ImageProps {
    fullWidth?: boolean;
    fullHeight?: boolean;
}
declare const Image: import("styled-components").StyledComponent<"img", any, ImageProps, never>;
interface InputProps {
    fullWidth?: boolean;
}
declare const Input: import("styled-components").StyledComponent<"input", any, InputProps, never>;
declare const InlineFlex: import("styled-components").StyledComponent<"div", any, {}, never>;
interface ListProps {
    columns?: number;
}
declare const List: import("styled-components").StyledComponent<"ul", any, ListProps, never>;
interface ListItemProps {
    hasTextCentered?: boolean;
    onClick?(): void;
}
declare const ListItem: import("styled-components").StyledComponent<"li", any, ListItemProps, never>;
interface MaterialIconProps {
    name: string;
    size?: "tiny" | "small" | "medium" | "large";
    onClick?(): void;
}
/**
 * Displays Material Icons.
 * To use this component, you have to load this webfont:
 * https://fonts.googleapis.com/icon?family=Material+Icons
 */
declare const MaterialIcon: FC<MaterialIconProps>;
declare const Text: import("styled-components").StyledComponent<"span", any, {}, never>;
interface TileProps {
    width: string;
}
declare const Tile: import("styled-components").StyledComponent<"button", any, TileProps, never>;
interface Title2Props {
    hasTextCentered?: boolean;
}
declare const Title2: import("styled-components").StyledComponent<"h2", any, Title2Props, never>;
interface Title3Props {
    hasTextCentered?: boolean;
}
declare const Title3: import("styled-components").StyledComponent<"h3", any, Title3Props, never>;
interface CardProps {
    /** Id of the item displayed. */
    id: number;
    /** Title displayed on the card. */
    title: string;
    /** Source URL of the image. */
    imageSource: string;
    /** Action executed on the click on the card. */
    onClick?(id?: number): void;
}
/** Displays informations about a movie. */
declare const Card: FC<CardProps>;
interface ContainerProps {
    fullWidth?: boolean;
}
declare const Container: import("styled-components").StyledComponent<"div", any, ContainerProps, never>;
interface ContentWrapperProps {
    fullWidth?: boolean;
}
declare const ContentWrapper: import("styled-components").StyledComponent<"div", any, ContentWrapperProps, never>;
declare const DarkModeToggleButton: FC;
interface HeaderProps {
    theme: Theme;
}
declare const Header: import("styled-components").StyledComponent<"header", any, HeaderProps, never>;
interface SearchBarProps {
    placeholder?: string;
    onChange?(value: string): void;
}
declare const SearchBar: FC<SearchBarProps>;
declare const TileBoard: import("styled-components").StyledComponent<"div", any, {}, never>;
interface ToggleButtonProps {
    isChecked?: boolean;
    onChange?(): void;
}
declare const ToggleButton: FC<ToggleButtonProps>;
declare const ArticleText: import("styled-components").StyledComponent<"article", any, {}, never>;
declare const ArticleImage: import("styled-components").StyledComponent<"div", any, {}, never>;
interface ArticleContainerProps {
    hasImage?: boolean;
}
declare const ArticleContainer: import("styled-components").StyledComponent<"div", any, ArticleContainerProps, never>;
interface ArticleProps {
    children: ReactNode;
    title: string;
    imageSource?: string;
}
declare const Article: FC<ArticleProps>;
interface CardListItem {
    id: number;
    title: string;
    imageSource: string;
}
interface CardListProps {
    items: Array<CardListItem>;
    onCardClick?(id?: number): void;
}
declare const CardList: FC<CardListProps>;
declare const GlobalStyles: import("styled-components").GlobalStyleComponent<{
    theme: Theme;
}, import("styled-components").DefaultTheme>;
/**
 * Mode to be used in Dark Mode feature.
 */
type ThemeMode = "light" | "dark";
interface ThemeModeContext {
    themeMode: ThemeMode;
    toggleMode(): void;
}
declare const ThemeModeContext: import("react").Context<ThemeModeContext>;
interface ThemeWithModeProviderProps {
    children: ReactNode;
}
declare const ThemeProvider: FC<ThemeWithModeProviderProps>;
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
declare const getInitialThemeMode: () => ThemeMode;
export { BrokenImage, CardOverlay, Image, Input, InlineFlex, List, ListItem, MaterialIcon, Text, Tile, Title2, Title3, Card, Container, ContentWrapper, DarkModeToggleButton, Header, SearchBar, TileBoard, ToggleButton, ArticleText, ArticleImage, ArticleContainer, Article, CardListItem, CardList, GlobalStyles, ThemeModeContext, ThemeProvider, devices, minWidthDevice, maxWidthDevice, themes, Theme, ThemeMode, getInitialThemeMode };
