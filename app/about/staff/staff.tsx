import Main from '@/app/components/mainStyle/main';
import styles from './staff.module.css';

export const Staff = () => {
    return(
        <Main clName={styles.container}>
            <div className={styles.staffList}>
                <span><img className={styles.photo} src={'./images/staff1.png'} alt="Staff Member"/></span>
                <div className={styles.text}>
                    <span className={styles.staffName}>Tom Cruise</span>
                    <span className={styles.staffPos}>Founder & Chairman</span>
                </div>  
            </div>
            <div className={styles.staffList}>
                <span><img className={styles.photo} src={'./images/staff2.png'} alt="Staff Member"/></span>
                <div className={styles.text}>
                    <span className={styles.staffName}>Emma Watson</span>
                    <span className={styles.staffPos}>Managing Director</span>
                </div>   
            </div>
            <div className={styles.staffList}>
                <span><img className={styles.photo} src={'./images/staff3.png'} alt="Staff Member"/></span>
                <div className={styles.text}>
                    <span className={styles.staffName}>Will Smith</span>
                    <span className={styles.staffPos}>Product Designer</span>
                </div>
            </div>
        </Main>
    )
}