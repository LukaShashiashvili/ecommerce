import Main from '@/app/components/mainStyle/main';
import styles from './footer.module.css';
import Link from 'next/link';

export default function Footer(){
    return(
        <Main clName={styles.main}>
            <div className={styles.footer}>
                <div className={styles.footerList}>
                    <span className={styles.title}>Subscribe</span>
                    <ul className={styles.ul}>
                        <li>Get 10% off your first order</li>
                        <li><input placeholder='Enter your email'/></li>
                    </ul>
                </div>
                <div className={styles.footerList}>
                    <span className={styles.title}>Support</span>
                    <ul className={styles.ul}>
                        <li><Link className={styles.link} href={'/'}>Street Name #1, City, Country</Link></li>
                        <li><Link className={styles.link} href={'/'}>example@gmail.com</Link></li>
                        <li><Link className={styles.link} href={'/'}>+123 456-789</Link></li>
                    </ul>
                </div>
                <div className={styles.footerList}>
                    <span className={styles.title}>Account</span>
                    <ul className={styles.ul}>
                        <li><Link className={styles.link} href={'/account'}>My Account</Link></li>
                        <li><Link className={styles.link} href={'/authorization'}>Login / Register</Link></li>
                        <li><Link className={styles.link} href={'/cart'}>Cart</Link></li>
                        <li><Link className={styles.link} href={'/wishlist'}>Wishlist</Link></li>
                        <li><Link className={styles.link} href={'/shop'}>Shop</Link></li>
                    </ul>
                </div>
                <div className={styles.footerList}>
                    <span className={styles.title}>Quick Link</span>
                    <ul className={styles.ul}>
                        <li><Link className={styles.link} href={'/'}>Privacy Policy</Link></li>
                        <li><Link className={styles.link} href={'/'}>Terms Of Use</Link></li>
                        <li><Link className={styles.link} href={'/'}>FAQ</Link></li>
                        <li><Link className={styles.link} href={'/contact'}>Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className={styles.underFooter}>
                <img src={"/images/UnderLine.svg"} alt="Underline" />
                <div className={styles.copyright}>© Copyright By Luka. All right reserved</div>
            </div>
        </Main>
    )
}