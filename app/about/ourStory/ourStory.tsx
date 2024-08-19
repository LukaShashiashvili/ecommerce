import Main from '@/app/components/mainStyle/main';
import styles from './ourStory.module.css';

export const OurStory = () => {
    return(
        <Main clName={styles.main}>
            <div className={styles.left}>
                <h1 className={styles.heading}>Our Story</h1>
                <span className={styles.span1}>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </span>
                <span className={styles.span2}>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</span>
            </div>
            <img className={styles.photo} src={'./images/ourstory.png'} alt="" />
        </Main>
    )
}