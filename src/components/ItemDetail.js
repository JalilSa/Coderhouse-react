import React from 'react';

export default function ItemDetail({ product }) {
    return (
        <div className="item-detail">
            <img src={product.img} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>Stock: {product.stock}</p>
            <p>Description: {product.description}</p>
        </div>
    );
}