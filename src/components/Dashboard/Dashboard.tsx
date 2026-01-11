import Totals from '../Totals/Totals.tsx';
import styles from './dashboard.module.scss'

function Dashboard() {
    return (
        <main className={styles.dashboard}>
            <Totals />
            Dashboard
        </main>
    )
}

export default Dashboard;