import React from 'react';
import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



export default function navbar() {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Express Sell

            <ul className='ulnav'>
                <li className='listanav'><CartWidget/></li>
                <li className='listanav'><a href="/about" className="texto-lista">Inicio</a></li>
                <li className='listanav'><a href="/tienda" className="texto-lista">Tienda</a></li>
                <li className='listanav'><a href="/sitio" className="texto-lista">Sitio</a></li>
            </ul>
          </Navbar.Brand>
        </Container>
      </Navbar>

    );
}