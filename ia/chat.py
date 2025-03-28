import os
import json
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
import pickle  # Para guardar el modelo entrenado

def train_model(json_path):
    # Cargar datos de entrenamiento desde el JSON especificado
    with open(json_path, "r") as file:
        dataset = json.load(file)

    # Convertir `return_bia` (array) a string para el entrenamiento
    phrases = [item["type"] for item in dataset]
    responses = ["|".join(item["return_bia"]) for item in dataset]  # Combinar array en un string separado por "|"

    # Vectorizar datos
    vectorizer = CountVectorizer()
    X = vectorizer.fit_transform(phrases)

    # Entrenar modelo
    model = MultinomialNB()
    model.fit(X, responses)

    os.makedirs("models", exist_ok=True)

    # Guardar modelo y vectorizador
    with open("models/model.pkl", "wb") as model_file:
        pickle.dump(model, model_file)

    with open("models/vectorizer.pkl", "wb") as vectorizer_file:
        pickle.dump(vectorizer, vectorizer_file)

    print(f"Modelo entrenado con datos de {json_path} y guardado exitosamente.")

# Ejecutar el entrenamiento cuando el archivo se llame directamente
if __name__ == "__main__":
    train_model("data/chat_data.json")
