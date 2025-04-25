## VisionX Pro – AI Powered Image Description Web App

Project Title: Vision X pro
Student Name: Ahmad Mateen 
Instructor: Hasnain Muavia

https://github.com/user-attachments/assets/766f61f7-b9c8-4941-982e-1123eca9ba0a


# 🔍 Overview
VisionX Pro is a smart, AI-driven web application that allows users to upload an image and instantly receive a natural language description of its contents. Powered by the Groq API and built using the Flask framework, this app provides an intuitive interface for real-time image understanding.
________________________________________
# ⚙️ How It Works
1.	User Interface:
o	The frontend consists of an index.html file located in the templates/ folder.
o	A main.js script handles frontend logic and sends uploaded images to the backend.
o	custom.css defines the styling and visual layout.
2.	Backend System:
o	Built with Flask, the backend handles routing and API integration.
o	Users upload images via the homepage.
o	The image is converted to base64 and sent to Groq's multimodal LLM.
o	The model analyzes the image and returns a descriptive response.
3.	Model Interaction:
o	Uses Groq's LLaMA 4 Scout 17B model via their official SDK.
o	Real-time chat-based image prompt sent using chat.completions.create().
________________________________________
# 🧠 What It Does
•	Accepts .jpg, .png, or similar image formats.
•	Provides descriptive insight such as:
“A man riding a bicycle through a city street in daylight.”
________________________________________
# 📦 Technologies Used
•	Python 3.x
•	Flask – Lightweight web framework.
•	Groq API – AI model for image description.
•	PIL (Pillow) – Image processing.
•	JavaScript (main.js) – Handles UI requests and responses.
•	HTML & CSS – For the frontend design.

# 📁 Project Structure
VisionX-Pro/
├── templates/
│   └── index.html
├── static/
│   ├── main.js
│   └── custom.css
├── app.py                # Core backend logic
├── main.py              # App runner
└── list_models.py    # Lists Groq models

# 🚀 Deployment
 To run VisionX Pro locally:
-	pip install flask groq pillow
-	python main.py
Open your browser and visit :  http://localhost:5000.

# 🏁 Conclusion
VisionX Pro combines advanced AI capabilities with an elegant web interface to deliver instant image analysis. It demonstrates how modern multimodal models can be integrated into practical, user-friendly tools.


