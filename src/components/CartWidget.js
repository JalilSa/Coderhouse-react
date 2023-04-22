import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './CartContext';
import { getProducts } from '../asyncMocks';

export default function CartWidget() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [showCart, setShowCart] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const getTotal = () => {
    return cartItems.reduce(
      (total, cartItem) =>
        total + cartItem.quantity * getProductPrice(cartItem.item.id),
      0
    );
  };

  const getProductPrice = (productId) => {
    const product = products.find((prod) => prod.id === productId);
    return product ? product.price : 0;
  };

  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} onClick={toggleCart} />
      <span className="notification">{cartItems.length}</span>

      {showCart && (
        <div className="cart-items">
          <ul>
            {cartItems.map((cartItem) => (
              <li key={cartItem.item.id}>
                {cartItem.item.name} x {cartItem.quantity} ={' '}
                ${getProductPrice(cartItem.item.id) * cartItem.quantity}
                <button onClick={() => removeFromCart(cartItem.item)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            Total: ${getTotal()}
            <button onClick={clearCart}>Clear Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}
