import styles from "./titles.module.css";

interface Props{
        title: string;
    }
export default function Title(props: Props){
    
    return(
        <main className={styles.titleContainer}>
            <div className={styles.cube}></div>
            <span className={styles.title}>{props.title}</span>
        </main>
    )
}