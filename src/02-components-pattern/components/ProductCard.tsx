import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks';
import { createContext } from 'react';
import { ProductContextProps, ProductCardProps } from '../interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
    const { counter, increaseBy } = useProduct();

    return (
        <Provider
            value={{
                counter,
                increaseBy,
                product
            }}>
            <div className={styles.productCard}>
                {children}
                {/* <img className={styles.productImg} src={noImage} alt='No imagen' /> */}
                {/* <ProductImage img={product.img} />

            <ProductTitle title={product.title} />

            <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
            </div>
        </Provider>
    );
};
