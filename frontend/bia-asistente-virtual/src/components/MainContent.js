import React, { useState } from 'react';
import SideBar from '../components/SideBar.js'; // Importa correctamente el Sidebar
import { Col } from 'react-bootstrap';
import ChatWithBIA from './ChatWithBIA'; 
import bia from '../assets/bia.svg';  // Ajusta la ruta dependiendo de dónde esté ubicada la imagen
import './MainContent.css'

const MainContent = () => {
  const [selectedOption, setSelectedOption] = useState('perfil'); // Estado para manejar la opción seleccionada

  return (
    <div className="main-content-container">
      {/* Sidebar siempre presente a la izquierda */}
      <SideBar setSelectedOption={setSelectedOption} />

      {/* Componente de contenido principal */}
      <Col xs={12} md={9} className="content-area">
        {selectedOption === 'perfil' && (
          <div>
            {/* Opción seleccionada: Perfil Ahorrador */}
            <Col xs={12}>
              <div className="profile-info">
                <p className="profile-text">Aún no cuentas con tu perfil ahorrador</p>      
              </div>
              <div className="profile-info1">
                <div className="bio-message">
                  <Col xs={12} className="mb-4">
                    <div className="svg-container">
                      <img src={bia} alt="BIA" width="100" height="100" />
                    </div>
                  </Col>
                  <p className=''>
                    ¡Hola! Soy BIA y quiero ayudarte a ahorrar sin complicaciones.
                    Cuéntame sobre ti y ajustaremos el ahorro a tu medida.
                    ¿Lista para empezar?
                  </p>
                </div>
              </div>
            </Col>
          </div>
        )}

        {selectedOption === 'otra' && (
          <ChatWithBIA />  // Aquí se renderiza ChatWithBIA cuando se selecciona la opción "otra"
        )}
      </Col>
    </div>
  );
};

export default MainContent;