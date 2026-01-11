import TotalsCell from './TotalsCell.tsx';
import { BiDollar } from "react-icons/bi";
import { IoCubeOutline } from "react-icons/io5";
import { LuShoppingBag, LuUsers } from "react-icons/lu";
// import { GoPeople } from "react-icons/go";
import styles from './totals.module.scss';

function Totals() {
    return (
        <section className={styles.totals}>
            <TotalsCell
                title="Total Users"
                amount={7770}
                icon={<BiDollar size={20} color='#333'/>}
                border={false}
            />
            <TotalsCell
                title="Total Users"
                amount={1555500}
                icon={<LuShoppingBag size={20} color='#333'/>}
                border={true}
            />
            <TotalsCell
                title="Total Users"
                amount={1500}
                icon={<LuUsers size={20} color='#333'/>}
                border={true}
            />
            <TotalsCell
                title="Total Users"
                amount={1500}
                icon={<IoCubeOutline size={20} color='#333'/>}
                border={true}
            />
        </section>
    )
}

export default Totals;