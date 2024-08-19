import Main from '@/app/components/mainStyle/main';
import styles from './navLink.module.css';
import Link from 'next/link';

interface Props{
    title: string;
}

export const NavLink = (props: Props) => {
    return(
        <main className={styles.main}>
            <Link className={styles.prev} href={'/'}>home</Link>
            <span>/</span>
            <Link className={styles.curr} href={`/${props.title}`}>{props.title}</Link>
        </main>
    )
}