import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';

const API = 'https://api.escuelajs.co/api/v1/';

const ProductList = () => {
    const products = useGetProducts(API);
    return (
        <section className="main-container">
            <div className="ProductList">
                {
                    products.map(product => (
                        <ProductItem
                            key={product.id}
                            product={product}                        
                        />
                    ))
                }
            </div>
        </section>
    );
}

export default ProductList;
