import React, { useState } from 'react';
import './ChatWithBIA.css';

const ChatWithBIA = () => {
  const [messages, setMessages] = useState([
    { text: "¡Genial, Jasmin, te acompañaré en este camino! 🎉 ¿Quieres que te cuente un poco sobre BIA?", fromBia: true }
  ]);
  const [userInput, setUserInput] = useState('');

  // Función para manejar el envío de mensajes
  const handleSendMessage = () => {
    if (userInput.trim() === '') return;

    // Agregar el mensaje del usuario
    setMessages(prevMessages => [
      ...prevMessages,
      { text: userInput, fromBia: false }
    ]);

    // Simular la respuesta de BIA (aquí se puede integrar la IA real)
    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages,
        { text: "¡Claro! BIA está aquí para ayudarte a ahorrar y simplificar tus finanzas. ¿Qué te gustaría saber?", fromBia: true }
      ]);
    }, 1000);

    // Limpiar el input después de enviar el mensaje
    setUserInput('');
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {/* Mostrar los mensajes */}
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.fromBia ? 'bia-message' : 'user-message'}`}>
              {message.text}
            </div>
          ))}
        </div>

        {/* Input de mensaje */}
        <div className="message-input">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Escribe un mensaje..."
            onKeyDown={(e) => e.key === 'Enter' ? handleSendMessage() : null}
          />
          <button onClick={handleSendMessage}>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default ChatWithBIA;
