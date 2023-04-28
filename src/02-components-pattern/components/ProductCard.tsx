import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks';
import { createContext, CSSProperties, ReactElement } from 'react';
import { Product, ProductContextProps } from '../interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface CardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
}

export const ProductCard = ({
    product,
    children,
    className,
    style
}: CardProps) => {
    const { counter, increaseBy } = useProduct();

    return (
        <Provider
            value={{
                counter,
                increaseBy,
                product
            }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
                {/* <img className={styles.productImg} src={noImage} alt='No imagen' /> */}
                {/* <ProductImage img={product.img} />

            <ProductTitle title={product.title} />

            <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
            </div>
        </Provider>
    );
};
