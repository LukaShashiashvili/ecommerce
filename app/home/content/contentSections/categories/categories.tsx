'use client'
import { useEffect, useState } from "react";
import styles from "./categories.module.css";
import axios from "axios";
import Title from "@/app/components/contentTitles/titles";
import Left from "@/app/components/images/left";
import Right from "@/app/components/images/right";

export default function Categories(){

    type Props = {
        category: string;
    }

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products') //(...products/categories')
             .then((result) => {
                setCategories(result.data)
             })
    })
    return(
        <main className={styles.main}>
            <Title title="Categories"></Title>
            <div className={styles.title}>
                <div className={styles.bigTitle}>Browse By Categories</div>
                <div className={styles.dir}>
                    <Left></Left>
                    <Right></Right>
                </div>
            </div>
            <ul className={styles.categoriesContainer}>
            {     
                categories.map((props: Props) =>
                <li className={styles.categoryList}>
                    <img src={''} alt="photo" />
                    <span className={styles.categoryName}>{props.category}</span>
                </li>)
            }
            </ul>
        </main>  
    )
}