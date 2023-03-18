import React from 'react';
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ItemListContainer() {
    const categories = ['Electrónicos', 'Ropa', 'Accesorios'];

    return (
        <div className='containercarta'>
        <Card  style={{ width: '18rem' }}>
            <h2>Listado de categorías</h2>
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>
                        <Button variant="secondary" onClick={() => Swal.fire(`¡Hola! Has seleccionado la categoría: ${category}`)}>
                            {category}
                        </Button>
                    </li>
                ))}
            </ul>
        </Card>
        </div>
    );
}