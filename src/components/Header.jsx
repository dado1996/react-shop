import React, { useContext, useState } from 'react';
import '@styles/Header.scss';
import Menu from './Menu';
import MyOrder from '@containers/MyOrder';

import menuIcon from '@icons/icon_menu.svg';
import cartIcon from '@icons/bt_add_to_cart.svg';
import logoImage from '@logos/logo_yard_sale.png';
import AppContext from '../context/AppContext';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const { state } = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <nav>
            <img src={menuIcon} alt="menu" className='menu' />

            <div className="navbar-left">
                <img src={logoImage} alt="logo" srcSet="" className='nav-logo' />
                <ul>
                    <li>
                        <a href="/">
                            All
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Clothes
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Electronics
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Furnitures
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Toys
                        </a>
                    </li>
                    <li>1
                        <a href="/">
                            Others
                        </a>
                    </li>
                </ul>
            </div>

            <div className="navbar-right">
                <ul>
                    <li className='navbar-email' onClick={handleToggle}>
                        platzi@example.com
                    </li>
                    <li className='navbar-shopping-cart' onClick={() => setToggleOrders(!toggleOrders)}>
                        <img src={cartIcon} alt="shopping cart" srcSet="" />
                        {
                            state.cart?.length > 0 ?
                            <div>
                                {state.cart?.length}
                            </div> :
                            null
                        }
                    </li>
                </ul>
            </div>
            {
                toggle ?
                <Menu /> :
                null
            }
            {
                toggleOrders ?
                <MyOrder /> :
                null
            }
        </nav>
    );
}

export default Header;
