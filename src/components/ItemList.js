import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ItemList = ({ items }) => {
    return (
        <div className="item-list">
            {items.map((item) => (
                <Card key={item.id} style={{ width: '18rem', margin: '1rem' }}>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <Card.Text>Price: ${item.price}</Card.Text>
                        <Link to={`/item/${item.id}`}>
                            <Button variant="primary">View Details</Button>
                        </Link>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default ItemList;