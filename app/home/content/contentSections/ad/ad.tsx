import styles from './ad.module.css';
import Link from 'next/link';
import { Button } from '@/app/components/button/button';

export default function Ad(){
    return(
        <main className={styles.main}>
            <div className={styles.left}>
                <span className={styles.miniTitle}>Categories</span>
                <span className={styles.bigTitle}>Enhance Your Music Experience</span>
                <span className={styles.timer}>timer here!!!</span>
                <Link href={'/product?${id} just test'} className={styles.lButton}><Button title={'Buy Now'} type='green'></Button></Link> 
            </div>
            <img src={'/images/jbl.png'} className={styles.photo}/>
        </main>
    )
}