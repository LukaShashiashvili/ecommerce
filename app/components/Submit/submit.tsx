import styles from './submit.module.css';

interface Props{
    title: string | number;
    onClick?: Function;
    children?: React.ReactNode;
}
export const Submit = (props: Props) => {

    const classNames = [styles.container];

    return(
            <input className={classNames.join(' ')} type="submit" value={props.title}/>
    )
}