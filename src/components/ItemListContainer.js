import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../asyncMocks';
import Item from './Item';
import { useCart } from './CartContext';

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  const { addItemToCart } = useCart();

  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId).then((products) => {
        setItems(products);
      });
    }
  }, [categoryId]);

  return (
    <div className="containercarta">
      <Card style={{ width: '18rem' }}>
        <h2>Listado de productos</h2>
        {items.length ? (
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <Item item={item} />
                <Button onClick={() => addItemToCart(item)}>Agregar al carrito</Button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay productos en esta categoría.</p>
        )}
      </Card>
    </div>
  );
}
