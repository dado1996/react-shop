import React, { useContext } from 'react';
import '@styles/OrderItem.scss';

import closeIcon from '@icons/square-xmark-solid.svg';
import AppContext from '../context/AppContext';

const OrderItem = ({ product, indexCart }) => {
    const { removeFromCart } = useContext(AppContext);

    const handleRemove = (product, index) => {
        removeFromCart(product, index);
    }

    return (
        <div className="OrderItem">
            <figure>
                <img src={product.images[0]} alt={product.name} srcSet="" />
            </figure>

            <p>{product.title}</p>
            <p>$ {product.price}.00</p>
            <img src={closeIcon} alt="close" srcSet="" onClick={() => handleRemove(product, indexCart)} />
        </div>
    );
};

export default OrderItem;
