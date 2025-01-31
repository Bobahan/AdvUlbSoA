import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface UseTheme {
    theme: Theme,
    onChangeTheme: () => void
}

export function useTheme(): UseTheme {
    const { theme, setTheme } = useContext(ThemeContext);

    const onChangeTheme = () => {
        const updatedTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT

        setTheme(updatedTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, updatedTheme)
    }

    return {
        theme, 
        onChangeTheme
    }
}