'use client'
import {Button} from "@/app/components/button/button";
import styles from "./todays.module.css";
import Title from "@/app/components/contentTitles/titles";
import Left from "@/app/components/images/left";
import Right from "@/app/components/images/right";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import Main from "@/app/components/mainStyle/main";
import BigTitle from "@/app/components/bigTitles/bigTitle";

interface Product{
    id: number,
    title: string,
    image: string,
    category: string,
    description: string,
    price: number,
}

export default function Todays(){
    
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
             .then((result) => {
                    setProducts(result.data)
             })
    }, [])

    return(
        <Main>
            <Title title="Today's"></Title>
            <div className={styles.title}>
                <BigTitle title={"Today's Best"}></BigTitle>
                <div className={styles.timer}>03:23:19:56</div>
                <div className={styles.dir}>
                    <Left></Left>
                    <Right></Right>
                </div>
            </div>
            
            <ul className={styles.productsContainer}>
                {
                    products.map((product: Product) => 
                    <li className={styles.productList}>
                        <img className={styles.productImage} 
                        src={product.image} 
                        alt="" />
                        <span className={styles.addToCart}>Add To Cart</span>
                        <div className={styles.pInfo}>
                            <span className={styles.pTitle}>{product.title}</span>
                            <span className={styles.pPrice}>{product.price}$</span>
                        </div>
                    </li>)
                }
            </ul>
            <Link href={"/shop"} className={styles.lButton}><Button title={"View All Products"} type={"red"}></Button></Link>
        </Main>
    )
}