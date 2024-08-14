import Button from "@/app/components/button/button";
import styles from "./todays.module.css";
import Title from "@/app/components/contentTitles/titles";
import Left from "@/app/components/images/left";
import Right from "@/app/components/images/right";

export default function Todays(){
    return(
        <main className={styles.main}>
            <Title title="Today's"></Title>
            <div className={styles.title}>
                <div className={styles.bigTitle}>Flash Sales</div>
                <div className={styles.timer}>03:23:19:56</div>
                <div className={styles.dir}>
                    <Left></Left>
                    <Right></Right>
                </div>
            </div>
            <div>asdasd</div>
            <Button></Button>
        </main>
    )
}