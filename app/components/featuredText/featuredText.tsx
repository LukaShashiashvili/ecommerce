import Link from 'next/link';
import styles from './featuredText.module.css';
import { ShopNowBtn } from '../shopNowBtn/shopNowBtn';

interface Props{
        title: string;
        description: string;
        clName?: string;
    }

export const FeaturedText = (props: Props) => {
    return (
        <span className={styles.container}>
            <span className={styles.bigTitle}>{props.title}</span>
            <span className={styles.description}>{props.description}</span>
            <ShopNowBtn></ShopNowBtn>
        </span>
    )
}