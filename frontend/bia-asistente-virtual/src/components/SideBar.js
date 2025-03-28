import React, { useState } from 'react';
import { Col, Nav } from 'react-bootstrap';
import './SideBar.css'; // Asegúrate de tener los estilos de tu sidebar

const SideBar = ({ setSelectedOption }) => {
  const [activeOption, setActiveOption] = useState('perfil'); // Estado para la opción activa

  const handleSelect = (option) => {
    setActiveOption(option); // Establecer la opción activa visualmente
    setSelectedOption(option); // Pasar la opción seleccionada al componente padre
  };

  return (
    <Col xs={12} md={3} className="p-4">
      <Nav className="flex-column d-flex menuchat">
        <Nav.Link 
          onClick={() => handleSelect('perfil')} 
          className={`sidebar-option ${activeOption === 'perfil' ? 'active' : ''}`}
        >
          Perfil Ahorrador
        </Nav.Link>
        <Nav.Link 
          onClick={() => handleSelect('otra')} 
          className={`sidebar-option ${activeOption === 'otra' ? 'active' : ''}`}
        >
          Chat con BIA
        </Nav.Link>
      </Nav>
    </Col>
  );
};

export default SideBar;