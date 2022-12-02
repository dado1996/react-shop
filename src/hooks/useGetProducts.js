import axios from "axios";
import { useState, useEffect } from "react";

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

    useEffect(async() => {
        const response = await axios(`${API}products`);
        setProducts(response.data);
    }, []);

    return products;
};

export default useGetProducts;