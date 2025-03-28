import React, { useState } from 'react';
import { Button, Col, Row, Container } from 'react-bootstrap';
import './MainContent.css'; 
import bia from '../assets/bia.svg'


const MainContent = ({ selectedOption }) => {
  return (
    <Col xs={12} md={9} className="p-4">

      {selectedOption === 'perfil' && (
        <Container>
          <Row>
            {/* Aquí agregamos el SVG como una imagen normal */}

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
                {/* Contenedor de botones */}
                <div className="button-container d-flex justify-content-between">
                  <Button variant="warning" className="start-button">Iniciar Conversación</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )}

      {selectedOption === 'otra' && (
        <Container>
          <Row>
            {/* Contenido para la Opción 2 */}
            <Col xs={12}>
              <div className="profile-info">
                <p>Contenido de la Opción 2.</p>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </Col>
  );
};

export default MainContent;