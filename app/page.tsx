import Header from "./home/header/header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header>
    </main>
  );
}
