from flask import Flask, request, jsonify
import pickle

app = Flask(__name__)

CHAT_MODEL_PATH = "models/model.pkl"
CHAT_VECTOR_PATH = "models/vectorizer.pkl"

try:
    with open(CHAT_MODEL_PATH, "rb") as file:
        chat_model = pickle.load(file)
    with open(CHAT_VECTOR_PATH, "rb") as file:
        chat_vectorizer = pickle.load(file)
except FileNotFoundError:
    raise FileNotFoundError(f"El modelo entrenado no se encuentra en {MODEL_PATH}. Por favor, entrena el modelo primero.")


@app.route('/chat', methods=['POST'])
def chat():
    """
    Endpoint to process user messages and generate responses.
    """
    # Parse request data
    request_data = request.json
    message_type = request_data.get("type")
    username = request_data.get("username")

    # Validate input
    if not message_type or not username:
        return jsonify({"error": "Fields 'type' and 'username' are required"}), 400

    try:
        input_vectorized = chat_vectorizer.transform([message_type])
        response_string = chat_model.predict(input_vectorized)[0]  # Predecir respuestas como string

        # Dividir el string en un array basado en el separador "|"
        response_array = response_string.split("|")

        # Reemplazar $name con el nombre del usuario en todas las respuestas
        personalized_responses = [
            response.replace('$name', username) for response in response_array
        ]

        return jsonify({
            "username": username,
            "responses": personalized_responses
        })
    
    except Exception as error:
        return jsonify({"error": f"An error occurred while processing the message: {str(error)}"}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
