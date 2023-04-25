import {
    ProductButtons,
    ProductCard,
    ProductImage,
    ProductTitle
} from '../components';

const product = {
    id: '1',
    title: 'Coffee Mug',
    img: './coffee-mug.png'
};

export const Hola = () => {
    return <h1>a</h1>;
};

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>
                {/* example 1 */}
                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>
                {/* example 2 */}
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </ProductCard>
            </div>
        </div>
    );
};
