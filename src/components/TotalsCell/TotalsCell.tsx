import styles from './totals.module.scss'

interface TotalsCellProps {
    title: string;
    amount: number;
    icon: React.ReactNode;
    border: boolean
}

function TotalsCell({ title, amount, icon, border }: TotalsCellProps) {
    return (
        <div className={styles.totals_cell} style={border ? {borderLeft: '1px solid #000'} : {borderLeft: 'none'}}  >
            <div className={styles.cell_title}>
                <p>{title}</p>
            </div>
            <div className={styles.cell_amount}>
                <h1>{amount}</h1>
                <span>{icon}</span>
            </div>
        </div>
    )
}

export default TotalsCell;