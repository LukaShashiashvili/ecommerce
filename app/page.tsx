import Content from "./home/content/content";
import Header from "./home/header/header";
import { Navigation } from "./home/navigation/navigation";
import styles from "./page.module.css";
import {ProductCard} from './components/productCard/productCard';
import axios from "axios";
import Footer from "./home/footer/footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Header></Header>
        <Navigation></Navigation>
      </div>
      <Content></Content>
      <Footer></Footer>
    </main>
  );
}
