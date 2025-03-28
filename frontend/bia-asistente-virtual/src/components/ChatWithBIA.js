import React, { useState, useEffect, useRef } from 'react';
import './ChatWithBIA.css';
import { getOpenAIResponse } from './OpenAI';

const ChatWithBIA = () => {
  const [messages, setMessages] = useState([
    { 
      text: "¡Genial, Jasmin, te acompañaré en este camino! 🎉 Para ayudarte mejor, me gustaría conocer un poco más sobre tu situación.\n" +
            "📌 ¿Cómo quieres empezar?\n" +
            "* Puedo analizar tus ingresos y gastos para sugerirte un plan personalizado.\n" +
            "* Puedes contarme a qué te dedicas y yo te ayudo a estructurar un ahorro adaptado a tu flujo de ingresos.\n" +
            "* Si tienes una meta de ahorro o inversión en mente, podemos crear juntas un plan para alcanzarlo.\n" +
            "* O si prefieres, puedo explicarte más sobre cómo funciona todo esto antes de que tomes una decisión.",
      fromBia: true 
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const handleSendMessage = async () => {
    if (userInput.trim() === '') return;

    // Agregar el mensaje del usuario al chat
    setMessages(prevMessages => [
      ...prevMessages,
      { text: userInput, fromBia: false }
    ]);

    // Obtener la respuesta de la IA usando la librería OpenAI
    const aiResponse = await getOpenAIResponse(userInput);

    // Agregar la respuesta de la IA al chat
    setMessages(prevMessages => [
      ...prevMessages,
      { text: aiResponse, fromBia: true }
    ]);

    // Limpiar el input
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