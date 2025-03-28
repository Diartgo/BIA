import axios from 'axios';

// Tu clave de API de OpenAI
const API_KEY = 'tu-clave-api-aqui';

// Configuración de la API
const API_URL = 'https://api.openai.com/v1/completions'; // Esto depende del modelo que uses

// Función para obtener la respuesta de la IA
export const getOpenAIResponse = async (prompt) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        model: "text-davinci-003", // Modelo de OpenAI (ajusta según lo que necesites)
        prompt: prompt,
        max_tokens: 150, // Limita la cantidad de tokens generados (ajústalo como prefieras)
        temperature: 0.7, // Controla la creatividad de la respuesta
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`, // Autorización con tu clave API
        }
      }
    );
    return response.data.choices[0].text.trim(); // Retorna la respuesta generada
  } catch (error) {
    console.error("Error al obtener la respuesta de OpenAI", error);
    return "Lo siento, hubo un error al procesar tu solicitud.";
  }
};
