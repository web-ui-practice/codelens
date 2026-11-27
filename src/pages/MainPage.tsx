import styles from './MainPage.module.css';

function MainPage() {
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
      </section>
    </main>
  );
}

export default MainPage;