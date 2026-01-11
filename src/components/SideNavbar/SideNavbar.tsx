import styles from './sidenavbar.module.scss'
import { ShoppingBag_Icon, House_Icon, Clipboard_Icon, Users_Icon, ReportSearch_Icon, Settings_Icon } from '../../icons/icons.tsx';

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
                <a href="#" className={styles.link_to}>
                    <House_Icon size={20} color='#333'/>
                    <p className={styles.path}>Dashboard</p>
                </a>
                <a href="#" className={styles.link_to}>
                    <ShoppingBag_Icon size={20} color='#333'/>
                    <p className={styles.path}>Products</p>
                </a>
                <a href="#" className={styles.link_to}>
                    <Clipboard_Icon size={20} color='#333'/>
                    <p className={styles.path}>Orders</p>
                </a>
                <a href="#" className={styles.link_to}>
                    <Users_Icon size={20} color='#333'/>
                    <p className={styles.path}>Customers</p>
                </a>
                <a href="#" className={styles.link_to}>
                    <ReportSearch_Icon size={20} color='#333'/>
                    <p className={styles.path}>Reports</p>
                </a>
                <a href="#" className={styles.link_to}>
                    <Settings_Icon size={20} color='#333'/>
                    <p className={styles.path}>Settings</p>
                </a>
            </nav>
        </aside>
    )
}

export default SideNavbar;