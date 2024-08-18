import Main from '@/app/components/mainStyle/main';
import styles from './services.module.css';

export const Services = () => {
    return(
        <Main clName={styles.container}>
            <div className={styles.serviceList}>
                <img className={styles.photo} src={'/images/Service1.svg'} alt="Service" />
                <div className={styles.text}>
                    <span className={styles.textUp}>FREE AND FAST DELIVERY</span>
                    <span className={styles.textDown}>Free delivery for all orders over $140</span>
                </div>
            </div>
            <div className={styles.serviceList}>
                <img className={styles.photo} src={'/images/Service2.svg'} alt="Service" />
                <div className={styles.text}>
                    <span className={styles.textUp}>24/7 CUSTOMER SERVICE</span>
                    <span className={styles.textDown}>Friendly 24/7 customer support</span>
                </div>
            </div>
            <div className={styles.serviceList}>
                <img className={styles.photo} src={'/images/Service3.svg'} alt="Service" />
                <div className={styles.text}>
                    <span className={styles.textUp}>MONEY BACK GUARANTEE</span>
                    <span className={styles.textDown}>We reurn money within 30 days</span>
                </div>
            </div>
        </Main>
    )
}