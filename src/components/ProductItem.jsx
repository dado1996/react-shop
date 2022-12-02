import React, { useContext, useState } from 'react';
import '@styles/ProductItem.scss';

import cartItem from '@icons/bt_add_to_cart.svg'
import AppContext from '../context/AppContext';

const ProductItem = ({ product }) => {
    const { addToCart } = useContext(AppContext);

    const handleClick = (item) => {
        console.log(item);
        addToCart(item);
    }

    return (
        <div className="ProductItem">
            <img src={product.images[0]} alt={product.title} srcSet="" />
            <div className="product-info">
                <div>
                    <p>$ {product.price}.00</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={() => handleClick(product)}>
                    <img src={cartItem} alt="cart" srcSet="" />
                </figure>
            </div>
        </div>
    );
}

export default ProductItem;
