import TotalsCell from './TotalsCell.tsx';
import { Users_Icon, ShoppingBag_Icon, CubeOutline_Icon, Dollar_Icon } from '../../icons/icons.tsx';
import styles from './totals.module.scss';

function Totals() {
    return (
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
    )
}

export default Totals;