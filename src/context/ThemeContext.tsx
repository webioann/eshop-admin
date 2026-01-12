import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { ThemeContext } from "./utils.ts";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Check user's system preference or local storage for initial theme
    const initialTheme = 
            localStorage.getItem('theme') 
        || (window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light');

    const [theme, setTheme] = useState(initialTheme);

    const toggleTheme = () => {
        setTheme((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        // Apply the theme to a data attribute on the document element
        document.documentElement.setAttribute("data-theme", theme);
        // Persist the user's choice in local storage
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
