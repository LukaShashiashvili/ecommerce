'use client'
import Title from '@/app/components/contentTitles/titles';
import styles from './thismonth.module.css';
import { Button } from '@/app/components/button/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Product{
    id: number,
    title: string,
    image: string,
    category: string,
    description: string,
    price: number,
}

export default function Thismonth(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
                .then((result) => {
                    setProducts(result.data)
                })
    })

    return(
        <main className={styles.main}>
            <Title title={'This Month'}></Title>
            <div className={styles.title}>
                <div className={styles.bigTitle}>Best Selling Products</div>
                <Link href={'/shop'} className={styles.lButton}><Button title={'View All'} type={'red'}>
                </Button></Link>
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
        </main>
    )
}