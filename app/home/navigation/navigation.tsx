import styles from "./navigation.module.css";
import Link from "next/link";


export function Navigation(){
    return(
        <main className={styles.navigation}>
            <div className={styles.navDown}>
                <ul className={styles.categoriesContainer}>
                    <li>Woman’s Fashion</li>
                    <li>Men’s Fashion</li>
                    <li>Electronics</li>
                    <li>Home & Lifestyle</li>
                    <li>Medicine</li>
                    <li>Sports & Outdoor</li>
                    <li>Baby’s & Toys</li>
                    <li>Groceries & Pets</li>
                    <li>Health & Beauty</li>
                </ul>
                <div className={styles.board}>
                    <div className={styles.boardLeft}>
                        <span>iPhone 14 Series</span>
                        <span className={styles.voucher}>Up to 10% off Voucher</span>
                        <Link href={"/shop"} className={styles.shopNowBtn}>Shop Now</Link>
                    </div>
                    <div className={styles.boardRight}></div>
                </div>
            </div>
        </main>
    )
}