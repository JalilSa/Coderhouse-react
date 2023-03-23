import React from 'react';

export default function Item({ item }) {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <p>Description: {item.description}</p>
        </div>
    );
}
