// import { useState } from 'react';
import { useThemeContext } from '../../context/utils.ts';
import { Sun_Icon, Moon_Icon } from '../../icons/icons.tsx';

import styles from './theme.module.scss'

function ThemeSwitcher() {
        const { theme, toggleTheme } = useThemeContext()!;

    return (
        <div className={styles.theme_switcher} onClick={() => toggleTheme()}>
            <i className={styles.switcher_icon}>
                {theme === 'light' ? <Sun_Icon size={24} color="#ed9121"/> : <Moon_Icon size={20}/>}
            </i>
        </div>
    )
}

export default ThemeSwitcher;