'use client'
import { useEffect, useState } from "react";
import styles from "./categories.module.css";
import axios from "axios";
import Title from "@/app/components/contentTitles/titles";
import Left from "@/app/components/images/left";
import Right from "@/app/components/images/right";
import Main from "@/app/components/mainStyle/main";
import BigTitle from "@/app/components/bigTitles/bigTitle";

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
        <Main>
            <Title title="Categories"></Title>
            <div className={styles.title}>
                <BigTitle title={'Browse By Categories'}></BigTitle>
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
        </Main>  
    )
}