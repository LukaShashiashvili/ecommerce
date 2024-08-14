import styles from "./button.module.css"

interface Props{
    title: string | number;
    clName?: string;
    onClick?: Function;
    type: 'red' | 'green';
}
export default function Button(){
    return(
        <button className={styles.buttonContainer}></button>
    )
}