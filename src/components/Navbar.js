import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import CartWidget from './CartWidget';

export default function NavbarComponent() {
  const categories = [
    { id: 'Electronicos', name: 'Electrónicos' },
    { id: 'Ropa', name: 'Ropa' },
    { id: 'Accesorios', name: 'Accesorios' },
  ];

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src="logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          <NavLink to="/" className="texto-lista">
            Express Sell
          </NavLink>
        </Navbar.Brand>
        <ul className="ulnav">
          {categories.map((category) => (
            <li key={category.id} className="listanav">
              <NavLink to={`/category/${category.id}`} className="texto-lista">
                {category.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <CartWidget />
      </Container>
    </Navbar>
  );
}
