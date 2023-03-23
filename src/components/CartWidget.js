import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartContext from './Cartdetail';

export default function CartWidget() {
    const { cart } = useContext(CartContext);
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="cart-widget">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="notification">{itemCount}</span>
        </div>
    );
}