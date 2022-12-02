import React, { useState } from "react";

const initialState = {
    cart: [

    ]
};

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState(
            {
                ...state,
                cart: [
                    ...state.cart,
                    payload
                ]
            }
        );
    }

    const removeFromCart = (payload, indexCart) => {
        console.log(indexCart);
        setState({
            ...state,
            cart: state.cart.filter((items, index) => index !== indexCart)
        })
    }
    
    return {
        state,
        addToCart,
        removeFromCart
    }
}

export default useInitialState;