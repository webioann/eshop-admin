import styles from './sidenavbar.module.scss'
import { LuHouse, LuShoppingBag, LuClipboardList } from "react-icons/lu";
import { BiShoppingBag } from "react-icons/bi";
import { GoPeople } from "react-icons/go";
import { TbReportSearch, TbSettings } from "react-icons/tb";

function SideNavbar() {
    return (
        <aside className={styles.side_navbar}>
            <section className={styles.logo}>
                <div className={styles.logo_icon}>
                    <BiShoppingBag size={30} color="#fff" />
                </div>
                
                <h3 className={styles.app_name}>Admin</h3>
            </section>
            {/* NAVBAR */}
            <nav className={styles.navbar}>
                <a href="#" className={styles.link_to}>
                    <LuHouse size={20} color='#333'/>
                    <p className={styles.path}>Dashboard</p>
                </a>
                <a href="#" className={styles.link_to}>
                    <LuShoppingBag size={20} color='#333'/>
                    <p className={styles.path}>Products</p>
                </a>
                <a href="#" className={styles.link_to}>
                    <LuClipboardList size={20} color='#333'/>
                    <p className={styles.path}>Orders</p>
                </a>
                <a href="#" className={styles.link_to}>
                    <GoPeople size={20} color='#333'/>
                    <p className={styles.path}>Customers</p>
                </a>
                <a href="#" className={styles.link_to}>
                    <TbReportSearch size={20} color='#333'/>
                    <p className={styles.path}>Reports</p>
                </a>
                <a href="#" className={styles.link_to}>
                    <TbSettings size={20} color='#333'/>
                    <p className={styles.path}>Settings</p>
                </a>
            </nav>
        </aside>
    )
}

export default SideNavbar;