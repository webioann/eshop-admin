import styles from './header.module.scss';
import { CgList } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.left_side}>
                <CgList size={30} color="#333" />
                <h3 className={styles.header_title}>Admin</h3>
            </div>
            <span className={styles.user_icon}>
                <FaRegUserCircle size={30} color="#333" />
            </span>
                
        </div>
    )
}

export default Header;