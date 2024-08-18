import Line from "@/app/components/images/line";
import styles from "./header.module.css";
import Link from "next/link";
import { ShopNowBtn } from "@/app/components/shopNowBtn/shopNowBtn";

export default function Header(){

    return (
        <main className={styles.main}>
            <div className={styles.topHeader}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <Link href={"/shop"}><ShopNowBtn></ShopNowBtn></Link>
            </div>
            <div className={styles.nav}>
                <div className={styles.navTop}>
                    <div className={styles.left}>Exclusive</div>
                    <div className={styles.middle}>
                        <Link href={"/"} className={styles.home}>Home</Link>
                        <Link href={"/contact"}className={styles.contact}>Contact</Link>
                        <Link href={"/about"} className={styles.about}>About</Link>
                        <Link href={"/authorization/register"} className={styles.auth}>Authorization</Link>
                    </div>
                    <div className={styles.right}>
                        <input type="text" placeholder="What are you looking for?" />
                            <Link href={'/wishlist'}><img src={'/images/favourite.svg'} alt="favourite"/></Link>
                            <Link href={'/cart'}><img src={'./images/add-cart.svg'} alt="cart" /></Link>
                    </div>
                </div>
                <Line></Line>
            </div>
        </main>
    )
}