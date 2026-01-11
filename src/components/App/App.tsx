// import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import Header from '../Header/Header.tsx';
import SideNavbar from '../SideNavbar/SideNavbar.tsx';
import Dashboard from '../Dashboard/Dashboard.tsx';

import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <SideNavbar/>
      <main className={styles.main}>
        <Header />
        <Dashboard/>
      </main>
    </div>
  );
}
export default App;
