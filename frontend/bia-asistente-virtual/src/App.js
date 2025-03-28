import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';
import './App.css'; // Aquí puedes agregar tus estilos generales
import Header from './components/Header';

const App = () => {
  // Estado para la opción seleccionada en el Sidebar
  const [selectedOption, setSelectedOption] = useState('perfil'); // Establecemos "perfil" como valor predeterminado

  return (
    <Container fluid>
      <Row>
        <Header/>
        <SideBar setSelectedOption={setSelectedOption} />
        <MainContent selectedOption={selectedOption} />
      </Row>
    </Container>
  );
};

export default App;