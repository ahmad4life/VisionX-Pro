import os
import base64
import logging
from flask import Flask, render_template, request, jsonify
from groq import Groq
from PIL import Image
from io import BytesIO

# Configure logging
logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "dev_secret_key")

def get_groq_client():
    api_key = os.environ.get("GROQ_API_KEY", "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")
    return Groq(api_key=api_key)

def convert_image_to_base64(image_file):
    try:
        # Open and convert image to JPEG format
        img = Image.open(image_file)
        img = img.convert('RGB')
        
        # Save to BytesIO object
        buffer = BytesIO()
        img.save(buffer, format="JPEG")
        
        # Get base64 string
        img_str = base64.b64encode(buffer.getvalue()).decode()
        return img_str
    except Exception as e:
        logging.error(f"Error converting image to base64: {str(e)}")
        raise

def generate_response(image):
    try:
        client = get_groq_client()
        
        chat_completion = client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": [
                        {"type": "text", "text": "What's in this image?"},
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": f"data:image/jpeg;base64,{image}",
                            },
                        },
                    ],
                }
            ],
            model="llama-3.2-11b-vision-preview",
        )
        return chat_completion.choices[0].message.content
    except Exception as e:
        logging.error(f"Error generating response: {str(e)}")
        raise

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/analyze', methods=['POST'])
def analyze():
    try:
        if 'image' not in request.files:
            return jsonify({'error': 'No image provided'}), 400
        
        image_file = request.files['image']
        if image_file.filename == '':
            return jsonify({'error': 'No selected file'}), 400
        
        # Convert image to base64
        image_base64 = convert_image_to_base64(image_file)
        
        # Generate response using Groq
        response = generate_response(image_base64)
        
        return jsonify({'response': response})
    
    except Exception as e:
        logging.error(f"Error processing request: {str(e)}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
    