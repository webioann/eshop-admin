// import { useState } from 'react';
import { useThemeContext } from '../../context/utils.ts';

import styles from './theme.module.scss'

function ThemeSwitcher() {
        const { theme, toggleTheme } = useThemeContext()!;

    return (
        <div className={styles.theme_switcher} onClick={() => toggleTheme()}>
            {theme}
        </div>
    )
}

export default ThemeSwitcher;