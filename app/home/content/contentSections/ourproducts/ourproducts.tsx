'use client'
import Title from '@/app/components/contentTitles/titles';
import styles from './ourproducts.module.css';
import BigTitle from '@/app/components/bigTitles/bigTitle';
import Left from '@/app/components/images/left';
import Right from '@/app/components/images/right';
import Main from '@/app/components/mainStyle/main';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@/app/components/button/button';
import Link from 'next/link';

interface Product{
    id: number,
    title: string,
    image: string,
    category: string,
    description: string,
    price: number,
}

export default function Ourproducts(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
                .then((result) => {
                    setProducts(result.data)
                })
    })

    return(
        <Main>
            <Title title={'Our Products'}></Title>
            <div className={styles.title}>
                <BigTitle title={'Explore Our Products'}></BigTitle>
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