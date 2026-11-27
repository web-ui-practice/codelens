import styles from './MainPage.module.css';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router';

function MainPage() {
  const navigate = useNavigate();
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <span className={styles.logo}>&lt;/&gt; CodeLens</span>
        <p className={styles.tagline}>Built for thoughtful teams</p>
      </header>

      <section className={styles.hero}>
        <span className={styles.badge}>Your code, with a clearer view</span>
        <h1 className={styles.title}>Ship with confidence. Not blind spots.</h1>
        <p className={styles.subtitle}>
          Find accessibility issues, code smells, and better ways forward. One repository, one
          thoughtful AI scan.
        </p>

        <div className={styles.cta}>
         <Button variant="primary" onClick={() => navigate('/connect-ai')}>Continue with GitHub →</Button>
         <p className={styles.note}>Read-only access. Your code stays yours.</p>
        </div>
      </section>
    </main>
  );
}

export default MainPage;