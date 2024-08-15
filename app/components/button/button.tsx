import styles from "./button.module.css"

interface Props{
    title: string | number;
    clName?: string;
    onClick?: Function;
    type: 'red' | 'green';
}
export const Button = (props: Props) => {

    const classNames = [styles.container];

    if(props.type === 'red'){
        classNames.push(styles.red)
    } else classNames.push(styles.green)
    if(props.clName){
        classNames.push(props.clName)
    }

    return(
        <div className={classNames.join(' ')}>
            {props.title}
        </div>
    )
}