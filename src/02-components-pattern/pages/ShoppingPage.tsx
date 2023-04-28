import {
    ProductButtons,
    ProductCard,
    ProductImage,
    ProductTitle
} from '../components';
import '../styles/custom-styles.css';

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
                <ProductCard
                    product={product}
                    className='bg-slate-800 text-white'>
                    <ProductImage />
                    <ProductTitle className='block mt-2' />
                    <ProductButtons className='flex justify-center' />
                </ProductCard>
                {/* example 2 */}
                <ProductCard
                    product={product}
                    className='bg-slate-800 text-white'
                    style={{
                        backgroundColor: '#707'
                    }}>
                    <ProductImage />
                    <ProductTitle
                        className='block mt-2'
                        title='styles components'
                    />
                    <ProductButtons className='flex justify-center' />
                </ProductCard>
                {/* example 3 */}
                <ProductCard product={product}>
                    <ProductCard.Image
                        style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
                    />
                    <ProductCard.Title className='text-red-500' />
                    <ProductCard.Buttons />
                </ProductCard>
            </div>
        </div>
    );
};
