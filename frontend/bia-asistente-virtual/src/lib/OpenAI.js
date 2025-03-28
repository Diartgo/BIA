import axios from 'axios';

// Tu clave de API de OpenAI
const API_KEY = 'tu-clave-api-aqui';

// Configuración de la API
const API_URL = 'https://api.openai.com/v1/completions'; // Esto depende del modelo que uses

// Función para obtener la respuesta de la IA
export const getOpenAIResponse = async (prompt) => {
  try {
    const response = await axios.post('http://localhost:5000/get-response', {
      prompt: prompt
    });
    return response.data.response; // Retorna la respuesta generada por el servidor
  } catch (error) {
    console.error("Error al obtener la respuesta de OpenAI", error);
    return "Lo siento, hubo un error al procesar tu solicitud.";
  }
};