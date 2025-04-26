# 🚀 VisionX Pro – AI-Powered Image Description Web App

**📝 Project Title:** VisionX Pro  
**👨‍🎓 Student Name:** Ahmad Mateen  
**👨‍🏫 Instructor:** Hasnain Muavia  
  

https://github.com/user-attachments/assets/f342fbb6-d340-4718-8a1f-a0bfabbf5ca0



## 🔍 Overview

VisionX Pro is a smart, AI-driven web application that allows users to upload an image and instantly receive a natural language description of its contents.  
It leverages the **Groq API** with **multimodal LLM** capabilities and is built using **Flask**, offering a seamless and interactive user experience.

---

## ⚙️ How It Works

### 1. 🎨 User Interface
- `index.html` – Main webpage located in the `templates/` folder.
- `main.js` – Handles frontend logic and communication with the backend.
- `custom.css` – Styles the layout and visual elements.

### 2. 🔧 Backend System
- Built using **Flask** to handle routing and image processing.
- Accepts image uploads and converts them to **Base64**.
- Sends image data to the **Groq multimodal model** for interpretation.
- Returns a natural language description to the frontend.

### 3. 🧠 Model Interaction
- Uses the following model via the Groq API:

```
meta-llama/llama-4-scout-17b-16e-instruct
```

- Chat-style image prompt handled via:

```python
client.chat.completions.create(
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
    model="meta-llama/llama-4-scout-17b-16e-instruct",
)
```

---

## 🧠 What It Does

- Accepts image formats like `.jpg`, `.jpeg`, `.png`
- Returns smart, natural descriptions such as:

> "A man riding a bicycle through a city street in daylight."

---

## 📦 Technologies Used

- `Python 3.x`
- `Flask` – Lightweight Python web framework
- `Groq API` – AI model for image understanding
- `PIL (Pillow)` – Python Imaging Library
- `JavaScript (main.js)` – Frontend interaction
- `HTML/CSS` – UI layout and design

---

## 📁 Project Structure

```
VisionX-Pro/
├── templates/
│   └── index.html
├── static/
│   ├── main.js
│   └── custom.css
├── app.py          # Core backend logic and API handling
├── main.py         # Entry point to run the Flask app
└── list_models.py  # Lists available Groq models
```

---

## 🚀 Deployment Instructions

### 1. Install Required Packages
```bash
pip install flask groq pillow
```

### 2. Run the Application
```bash
python main.py
```

### 3. Open in Browser
```
http://localhost:5000
```

---

## 🏁 Conclusion

VisionX Pro demonstrates the power of integrating AI with modern web development.  
By using **Groq's LLMs**, it delivers real-time, intelligent image descriptions with a clean, user-friendly interface.  
Perfect for developers and learners interested in AI, image processing, and full-stack integration.

---

> ⭐ *Feel free to fork, contribute, or star this project if you find it helpful!*


