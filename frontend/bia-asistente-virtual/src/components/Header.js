import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './Header.css';  // Asegúrate de tener un archivo CSS para el estilo.

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      {/* Saludo */}
      <Container>
        <h2 className="greeting">Hola, Jasmin</h2>
      </Container>
    </Navbar>
  );
};

export default Header;