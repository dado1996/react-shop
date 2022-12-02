import React, { useContext } from "react";
import OrderItem from "../components/OrderItem";
import AppContext from "../context/AppContext";
import '@styles/MyOrder.scss';

import arrowIcon from '@icons/arrow-right-solid.svg';

const MyOrder = () => {
    const { state } = useContext(AppContext);

    const sumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    }
    
    return (
        <aside className="MyOrder">
            <div className="title-container">
                <img src={arrowIcon} alt="arrow" srcSet="" />
                <p className="title">My order</p>
            </div>

            <div className="my-order-content">
                {
                    state.cart.map((product, index) => (
                        <OrderItem
                            key={`orderItem-${product.id}-${index}`}
                            product={product}
                            indexCart={index}
                        />
                    ))
                }

                <div className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>
                        $ {sumTotal()}.00
                    </p>
                </div>
            </div>
            <button className="primary-button">
                Checkout
            </button>
        </aside>
    );
};

export default MyOrder;
