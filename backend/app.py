from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app)

# Load ML model
model = pickle.load(open('model.pkl', 'rb'))

# Home route
@app.route('/')
def home():
    return "Welcome to the Marine Ecosystem Conservation API"

# Analyze route
@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.json['data']
    # Example: Pass data to ML model
    prediction = model(float(data))
    return jsonify({"result": prediction})

if __name__ == '__main__':
    app.run(debug=True)
