import styles from './header.module.scss';
import { UserCircle_Icon, List_Icon } from '../../icons/icons.tsx';

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.left_side}>
                <List_Icon size={30} color="#333" />
                <h3 className={styles.header_title}>Admin</h3>
            </div>
            <span className={styles.user_icon}>
                <UserCircle_Icon size={30} color="#333" />
            </span>
                
        </div>
    )
}

export default Header;