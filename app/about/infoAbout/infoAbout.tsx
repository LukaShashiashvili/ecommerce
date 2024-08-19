import Main from '@/app/components/mainStyle/main';
import styles from './infoAbout.module.css';

export const InfoAbout = () => {
    return(
        <Main>
            <div className={styles.infoContainer}>
                <div className={styles.infoList}>
                    <img src={'./images/info1.svg'} alt="Info"/>
                    <span className={styles.number}>10.5K</span>
                    <span className={styles.description}>Sellers active our site</span>
                </div>
                <div className={styles.infoList}>
                    <img src={'./images/info2.svg'} alt="Info"/>
                    <span className={styles.number}>33K</span>
                    <span className={styles.description}>Monthly product sale</span>
                </div>
                <div className={styles.infoList}>
                    <img src={'./images/info3.svg'} alt="Info"/>
                    <span className={styles.number}>45.5K</span>
                    <span className={styles.description}>Customer active in our site</span>
                </div>
                <div className={styles.infoList}>
                    <img src={'./images/info4.svg'} alt="Info"/>
                    <span className={styles.number}>25K</span>
                    <span className={styles.description}>Annual gross in our site</span>
                </div>
            </div>
        </Main>
    )
}