from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required
import os
import requests
from datetime import timedelta

app = Flask(__name__)
CORS(app)

# Configuration
app.config['JWT_SECRET_KEY'] = 'your-secret-key-change-in-production'
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=24)

bcrypt = Bcrypt(app)
jwt = JWTManager(app)

# In-memory storage (replace with MongoDB later)
users = []
interactions = []

# AI API Configuration - Google Gemini API
GEMINI_API_KEY = 'AIzaSyDUgrBy5Q2b2SY1ojlSp7OYAQJpX9Fjjms'

@app.route('/register', methods=['POST'])
def register():
    """Register a new user"""
    data = request.get_json()
    
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    
    # Validation
    if not name or not email or not password:
        return jsonify({'error': 'All fields are required'}), 400
    
    # Check if user exists
    if any(user['email'] == email for user in users):
        return jsonify({'error': 'User already exists'}), 400
    
    # Hash password
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    
    # Store user
    user = {
        'id': len(users) + 1,
        'name': name,
        'email': email,
        'password': hashed_password
    }
    users.append(user)
    
    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/login', methods=['POST'])
def login():
    """Login user and return JWT token"""
    data = request.get_json()
    
    email = data.get('email')
    password = data.get('password')
    
    # Validation
    if not email or not password:
        return jsonify({'error': 'Email and password required'}), 400
    
    # Find user
    user = next((u for u in users if u['email'] == email), None)
    
    if not user or not bcrypt.check_password_hash(user['password'], password):
        return jsonify({'error': 'Invalid credentials'}), 401
    
    # Create token (identity must be a string in flask-jwt-extended v4.6+)
    access_token = create_access_token(identity=str(user['id']))
    
    return jsonify({
        'token': access_token,
        'user': {'name': user['name'], 'email': user['email']}
    }), 200

@app.route('/ask', methods=['POST'])
@jwt_required()
def ask_ai():
    """Process student question and return AI answer"""
    data = request.get_json()
    question = data.get('question')
    language = data.get('language', 'English')
    
    if not question:
        return jsonify({'error': 'Question is required'}), 400
    
    # Store interaction
    interactions.append({
        'question': question,
        'language': language
    })
    
    # Generate AI response
    try:
        answer = generate_ai_response(question, language)
        return jsonify({'answer': answer}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

def generate_ai_response(question, language):
    """Generate AI response using Google Gemini API"""
    prompt = f"""You are a helpful tutor for underprivileged students.
Answer this question in {language} language in a simple, easy-to-understand way with an example.

Question: {question}

Provide:
1. Simple explanation
2. Easy example
3. Use beginner-friendly language"""

    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key={GEMINI_API_KEY}"

    payload = {
        "contents": [
            {
                "parts": [{"text": prompt}]
            }
        ]
    }

    import time
    # Retry up to 3 times on rate limit (429)
    for attempt in range(3):
        response = requests.post(url, json=payload)
        if response.status_code == 429:
            time.sleep(5)  # Wait 5 seconds before retrying
            continue
        response.raise_for_status()
        data = response.json()
        return data['candidates'][0]['content']['parts'][0]['text']

    raise Exception("Gemini API is busy right now. Please wait a few seconds and try again.")

@app.route('/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({'status': 'running', 'users': len(users)}), 200

if __name__ == '__main__':
    print("🚀 VidyaAI Backend Starting...")
    print("📝 Register at: http://localhost:5000/register")
    print("🔐 Login at: http://localhost:5000/login")
    print("🤖 Ask AI at: http://localhost:5000/ask")
    app.run(debug=True, port=5000)
