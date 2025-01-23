from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

# Reemplaza 'tu_api_key' con tu clave de API de OpenAI
openai.api_key = 'tu_api_key'

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    prompt = data.get('prompt')
    
    if not prompt:
        return jsonify({'error': 'No prompt provided'}), 400
    
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=150
    )
    
    return jsonify({'response': response.choices[0].text.strip()})

if __name__ == '__main__':
    app.run(ssl_context=('cert.pem', 'key.pem'), port=3100, debug=True)