import Content from "./home/content/content";
import Header from "./home/header/header";
import { Navigation } from "./home/navigation/navigation";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Header></Header>
        <Navigation></Navigation>
      </div>
      <Content></Content>
    </main>
  );
}
