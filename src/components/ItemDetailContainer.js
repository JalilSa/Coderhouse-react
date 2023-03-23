import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getProductById } from '../asyncMocks';

export default function ItemDetailContainer() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getProductById(id).then((product) => {
            setProduct(product);
        });
    }, [id]);

    return (
        <div>
            {product ? <ItemDetail product={product} /> : <p>Loading...</p>}
        </div>
    );
}