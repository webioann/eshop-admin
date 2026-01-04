import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import styles from './app.module.css';

function App() {
  return (
    <main className={styles.app}>
      <header>
        <h1>HOME PAGE</h1>
        <SignedOut >
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
    </main>
  );
}
export default App;
