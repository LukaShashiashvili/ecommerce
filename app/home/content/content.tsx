import Line from "@/app/components/images/line";
import styles from "./content.module.css";
import Todays from "./contentSections/todays/todays";

export default function Content(){
    return(
        <main className={styles.main}>
            <Todays></Todays>
            <Line></Line>
        </main>
    )
}