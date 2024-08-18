import styles from './productCard.module.css';

export interface Product{
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}

type Props = {
    product: Product;
}

export const ProductCard = (props:Props) => {
    return(
        <main></main>
    )
}