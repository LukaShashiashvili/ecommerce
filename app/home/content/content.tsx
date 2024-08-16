import Line from "@/app/components/images/line";
import styles from "./content.module.css";
import Todays from "./contentSections/todays/todays";
import Categories from "./contentSections/categories/categories";
import Thismonth from "./contentSections/thismonth/thismonth";
import Ad from "./contentSections/ad/ad";

export default function Content(){
    return(
        <main className={styles.main}>
            <Todays></Todays>
            <Line></Line>
            <Categories></Categories>
            <Line></Line>
            <Thismonth></Thismonth>
            <Ad></Ad>
        </main>
    )
}