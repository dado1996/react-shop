import React from 'react';
import ProductInfo from '../components/ProductInfo';
import '../styles/ProductDetail.scss';

const ProductDetail = () => {
    return (
        <aside className="ProductDetail">
            <div className="ProductDetail-close">
                <img src="../../public/assets/icons/icon_close.png" alt="close" srcSet="" />
                <ProductInfo />
            </div>
        </aside>
    );
};

export default ProductDetail;
