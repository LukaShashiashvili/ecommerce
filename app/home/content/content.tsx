import Line from "@/app/components/images/line";
import styles from "./content.module.css";
import Todays from "./contentSections/todays/todays";
import Categories from "./contentSections/categories/categories";
import Thismonth from "./contentSections/thismonth/thismonth";
import Ad from "./contentSections/ad/ad";
import Ourproducts from "./contentSections/ourproducts/ourproducts";
import Featured from "./contentSections/featured/featured";
import { Services } from "./contentSections/services/services";

export default function Content(){
    return(
        <main className={styles.main}>
            <Todays></Todays>
            <Line></Line>
            <Categories></Categories>
            <Line></Line>
            <Thismonth></Thismonth>
            <Ad></Ad>
            <Ourproducts></Ourproducts>
            <Featured></Featured>
            <Services></Services>
        </main>
    )
}