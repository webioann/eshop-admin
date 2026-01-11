import TotalsCell from '../../components//TotalsCell/TotalsCell.tsx';
import { Users_Icon, ShoppingBag_Icon, CubeOutline_Icon, Dollar_Icon } from '../../icons/icons.tsx';
import styles from './dashboard.module.scss'

function Dashboard() {
    return (
        <main className={styles.dashboard}>
            <section className={styles.totals}>
                <TotalsCell
                    title="Total Users"
                    amount={7770}
                    icon={<Dollar_Icon size={20} color='#333'/>}
                    border={false}
                />
                <TotalsCell
                    title="Total Users"
                    amount={1555500}
                    icon={<ShoppingBag_Icon size={20} color='#333'/>}
                    border={true}
                />
                <TotalsCell
                    title="Total Users"
                    amount={1500}
                    icon={<Users_Icon size={20} color='#333'/>}
                    border={true}
                />
                <TotalsCell
                    title="Total Users"
                    amount={1500}
                    icon={<CubeOutline_Icon size={20} color='#333'/>}
                    border={true}
                />
            </section>
            <section className={styles.table_section}>
                <header className={styles.table_header}>Recent Orders</header>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.table_head_cell}>Order ID</th>
                            <th className={styles.table_head_cell}>Customer</th>
                            <th className={styles.table_head_cell}>Items</th>
                            <th className={styles.table_head_cell}>Amount</th>
                            <th className={styles.table_head_cell}>Status</th>
                            <th className={styles.table_head_cell}>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* MAP DATA HERE =========================*/}
                        {[1,2,3,4,5,6,7,8,9,10].map((item)=>(
                            <tr key={item}>
                                <td>#ODR{1000 + item}</td>
                                <td>Customer {item}</td>
                                <td>{item}</td>
                                <td>${(item * 100).toFixed(2)}</td>
                                <td>Pending</td>
                                <td>2023-01-{10 + item}</td>
                            </tr>
                        ))}
                        {/* ========================================= */}
                    </tbody>
                </table>
            </section>

        </main>
    )
}

export default Dashboard;