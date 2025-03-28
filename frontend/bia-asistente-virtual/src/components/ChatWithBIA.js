import React, { useState, useEffect, useRef } from 'react';
import './ChatWithBIA.css';

const ChatWithBIA = () => {
  const [messages, setMessages] = useState([
    { 
      text: "¡Genial, Jasmin, te acompañaré en este camino! 🎉 Para ayudarte mejor, me gustaría conocer un poco más sobre tu situación.\n" +
            "📌 ¿Cómo quieres empezar?\n" +
            "1. Puedo analizar tus ingresos y gastos para sugerirte un plan personalizado.\n" +
            "2. Puedes contarme a qué te dedicas y yo te ayudo a estructurar un ahorro adaptado a tu flujo de ingresos.\n" +
            "3. Si tienes una meta de ahorro o inversión en mente, podemos crear juntas un plan para alcanzarlo.\n" +
            "4. O si prefieres, puedo explicarte más sobre cómo funciona todo esto antes de que tomes una decisión.",
      fromBia: true 
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const messagesEndRef = useRef(null);  // Ref para hacer scroll hasta el final

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

  // Scroll al final del chat cada vez que el mensaje cambie
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
          <div ref={messagesEndRef} /> {/* Ref para hacer scroll al final */}
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