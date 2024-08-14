import styles from "./header.module.css";
export default function Header(){
    return (
        <main className={styles.main}>
            <div className={styles.topHeader}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                <span className={styles.shopNowBtn}>SHOP NOW</span>
            </div>
            <div className={styles.nav}>
                <div className={styles.navTop}>
                    <div className={styles.left}>Exclusive</div>
                    <div className={styles.middle}>
                        <span className={styles.home}>Home</span>
                        <span className={styles.contact}>Contact</span>
                        <span className={styles.about}>About</span>
                        <span className={styles.auth}>Authorization</span>
                    </div>
                    <div className={styles.right}>
                        <input type="text" placeholder="What are you looking for?" />
                            <span>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            <span>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3 5H7L10 22H26" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                            </span>
                    </div>
                </div>
                <div className={styles.line}>
                    <svg width="100%" height="1" viewBox="0 0 1440 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line opacity="0.3" x1="1440" y1="0.25" y2="0.25" stroke="black" stroke-width="0.5"/></svg>
                </div>
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
                            <span className={styles.shopNowBtn}>Shop Now</span>
                        </div>
                        <div className={styles.boardRight}></div>
                    </div>
                </div>
            </div>
        </main>
    )
}