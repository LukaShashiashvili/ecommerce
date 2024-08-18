import styles from './bigTitle.module.css';

interface Props{
    title: string;
    clName?:string;
}

export default function BigTitle(props: Props){

    const classNames = [styles.main];

    if(props.clName){
        classNames.push(props.clName)
    }

    return(
        <div className={classNames.join(' ')}>
            {props.title}
        </div>
    )
}