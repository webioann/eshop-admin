import styles from './sidenavbar.module.scss'
import { ShoppingBag_Icon,
    House_Icon,
    Clipboard_Icon, 
    Users_Icon, 
    ReportSearch_Icon, 
    Settings_Icon 
} from '../../icons/icons.tsx';
import { Link } from 'react-router-dom';

function SideNavbar() {
    return (
        <aside className={styles.side_navbar}>
            <section className={styles.logo}>
                <div className={styles.logo_icon}>
                    <ShoppingBag_Icon size={30} color="#fff" />
                </div>
                
                <h3 className={styles.app_name}>Admin</h3>
            </section>
            {/* NAVBAR */}
            <nav className={styles.navbar}>
                <Link to="/" className={styles.link_to}>
                    <House_Icon size={20} color='#333'/>
                    <p className={styles.path}>Dashboard</p>
                </Link>
                <Link to="/products" className={styles.link_to}>
                    <ShoppingBag_Icon size={20} color='#333'/>
                    <p className={styles.path}>Products</p>
                </Link>
                <Link to="/orders" className={styles.link_to}>
                    <Clipboard_Icon size={20} color='#333'/>
                    <p className={styles.path}>Orders</p>
                </Link>
                <Link to="/customers" className={styles.link_to}>
                    <Users_Icon size={20} color='#333'/>
                    <p className={styles.path}>Customers</p>
                </Link>
                <Link to="/reports" className={styles.link_to}>
                    <ReportSearch_Icon size={20} color='#333'/>
                    <p className={styles.path}>Reports</p>
                </Link>
                <Link to="/settings" className={styles.link_to}>
                    <Settings_Icon size={20} color='#333'/>
                    <p className={styles.path}>Settings</p>
                </Link>
            </nav>
        </aside>
    )
}

export default SideNavbar;