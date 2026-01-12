import { useEffect, useState } from 'react';
import { UserCircle_Icon, List_Icon } from '../../icons/icons.tsx';
import { useLocation } from 'react-router-dom';
import { useThemeContext } from '../../context/utils.ts';
import styles from './header.module.scss';

function Header() {
    const location = useLocation();
    const currentPath = location.pathname;
    const [pageTitle, setPageTitle] = useState('Dashboard');
    const { theme, toggleTheme } = useThemeContext()!;

    useEffect(() => {
        const setRouterPath = async () => {
            try {
                switch (currentPath) {
                    case '/': setPageTitle('Dashboard');
                        break;
                    case '/products': setPageTitle('Products');   
                        break;
                    case '/orders': setPageTitle('Orders');
                        break;
                    case '/customers': setPageTitle('Customers');
                        break;
                    case '/reports': setPageTitle('Reports');
                        break;
                    case '/settings': setPageTitle('Settings');
                        break;
                }
            } catch (error) {
                console.error('Error navigating to path:', error);
            }
        }
        setRouterPath();
    }, [currentPath]);

    return (
        <div className={styles.header}>
            <div className={styles.left_side}>
                <List_Icon size={30} color="#333" />
                <h3 className={styles.header_title}>
                    {pageTitle}
                </h3>
            </div>
            <span className={styles.user_icon} onClick={() => toggleTheme()}>
                {theme}
                <UserCircle_Icon size={30} color="#333" />
            </span>
                
        </div>
    )
}

export default Header;