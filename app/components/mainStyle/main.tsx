import styles from './main.module.css';
    interface Props{
        clName?: string;
        children: React.ReactNode;
    }
export default function Main(props: Props){
    const classNames = [styles.main];
    if(props.clName){
        classNames.push(props.clName)
    }
    return(
        <main className={classNames.join(' ')}>
            {props.children}
        </main>
    )
}