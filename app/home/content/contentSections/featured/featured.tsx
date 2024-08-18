import Main from '@/app/components/mainStyle/main';
import styles from './featured.module.css';
import Title from '@/app/components/contentTitles/titles';
import BigTitle from '@/app/components/bigTitles/bigTitle';
import Link from 'next/link';
import { FeaturedText } from '@/app/components/featuredText/featuredText';

 export default function Featured(){
    return(
        <Main>
            <Title title={'Featured'}></Title>
            <BigTitle clName={styles.bigTitle} title={'New Arrival'}></BigTitle>
            <div className={styles.container}>
                <Link href={'/shop'} className={styles.left}>
                    <img className={styles.photo} src={'/images/ps5.png'} alt="ps5"/>
                    <FeaturedText title={'Play Station 5'} description={'Black and White version of the PS5 coming out on sale.'}></FeaturedText>
                </Link>
                <div className={styles.right}>
                    <Link href={'/shop'} className={styles.block1}>
                        <img className={styles.photo1} src={'/images/attractive-woman.png'} alt=""/>
                        <FeaturedText title={"Women’s Collections"} description={'Featured woman collections that give you another vibe.'}></FeaturedText>
                    </Link>
                    <Link href={'/shop'} className={styles.block}>
                    <img className={styles.photo} src={'/images/speakers.png'} alt=""/>
                    <FeaturedText title={'Speakers'} description={'Amazon wireless speakers'}></FeaturedText>
                        </Link>
                    <Link href={'/shop'} className={styles.block}>
                    <img className={styles.photo} src={'/images/perfume.png'} alt=""/>
                    <FeaturedText title={'Perfume'} description={'GUCCI INTENSE OUD EDP'}></FeaturedText>
                        </Link>
                </div>
            </div>
        </Main>
    )
}