import { useContext, createContext } from "react";

export interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);
export const useThemeContext = () => useContext(ThemeContext);