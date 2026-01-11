// import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Routes, Route } from "react-router-dom";
import Header from '../Header/Header.tsx';
import SideNavbar from '../SideNavbar/SideNavbar.tsx';
import Dashboard from '../../pages//Dashboard/Dashboard.tsx';
import Products from "../../pages/Products/Products.tsx";
import Customers from "../../pages/Customers/Customers.tsx";
import Orders from "../../pages/Orders/Orders.tsx";
import Reports from "../../pages/Reports/Reports.tsx";
import Settings from "../../pages/Settings/Settings.tsx";

import styles from './app.module.scss';

function App() {
  console.log("RENDER ===>")
  return (
    <div className={styles.app}>
      <SideNavbar/>
      <main className={styles.main}>
        <Header />
        <Routes>
          <Route index element={<Dashboard/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/customers" element={<Customers/>} />
          <Route path="/reports" element={<Reports/>} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
