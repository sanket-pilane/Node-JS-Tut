# 🧠 Brainwave Backend

Brainwave is a full-stack **SaaS AI platform** that brings together multiple **AI-powered tools** in one seamless experience. Tailored for students, developers, and creatives, it offers a unified workspace for **chat**, **media generation**, and **code assistance**, all powered by leading AI models from **OpenAI**, **Google Gemini**, and **Replicate**.

---

## ✨ Features

- 💬 **Conversational AI** – Real-time AI chat powered by Google Gemini and OpenAI
- 🧑‍💻 **Code Generation** – Get smart, context-aware code snippets on the fly
- 🖼️ **Image Generation** – Create art from prompts via Replicate
- 🎞️ **Video Generation** – Generate short videos from text prompts
- 🎵 **Music Generation** – Compose AI-powered music effortlessly
- 🌐 **RESTful API** – Clean and developer-friendly endpoints for easy frontend integration

---

## 🧰 Tech Stack

- ⚙️ **Backend**: Node.js + Express.js
- 🧠 **AI Models**: OpenAI, Google Gemini, Replicate
- 🔐 **Security**: Environment-based API keys via `dotenv`
- 🔗 **Architecture**: Modular controllers & routes for scalability

---

## 🗂️ Project Structure

```
.
├── controller/
│   ├── mediaController.js             # Handles image, video, music generation
│   ├── textControllerGemini.js        # Handles chat/code via Gemini
│   └── textControllerOpenAi.js        # Handles chat/code via OpenAI
├── routes/
│   ├── mediaRoutes.js                 # Media generation routes
│   └── textRoutes.js                  # Text (chat/code) routes
├── index.js                           # Server entry point
├── package.json                       # Node.js config
├── .env                               # Environment variables
```

---

## 🚀 Getting Started

### 🧱 Prerequisites

- Node.js (v16 or newer)
- npm (v8+)
- API keys from:
  - [Google Gemini](https://ai.google.dev/)
  - [OpenAI](https://platform.openai.com/)
  - [Replicate](https://replicate.com/)

---

### ⚙️ Installation & Setup

1. **Clone the Repository**

```bash
git clone <repository-url>
cd Brainwave
```

2. **Install Dependencies**

```bash
npm install
```

3. **Create a `.env` File**

```env
PORT=5157
GEMINI_API_KEY=your_gemini_api_key
OPENAI_API_KEY=your_openai_api_key
REPLICATE_API_TOKEN=your_replicate_api_token
```

4. **Start Development Server**

```bash
npm run dev
```

Server will run on `http://localhost:5157` or the port set in `.env`.

---

## 📡 API Endpoints

### 📝 Text Endpoints `/api/text`

- `POST /api/text/chat` – Chat with AI (Google Gemini)
- `POST /api/text/code` – Generate code using AI (Google Gemini)

### 🧪 Media Endpoints `/api/media`

- `POST /api/media/image` – Generate images from text prompts
- `POST /api/media/video` – Generate videos from text prompts
- `POST /api/media/music` – Generate music from text prompts

---

## 🔐 Environment Variables

| Key                   | Description                 |
| --------------------- | --------------------------- |
| `PORT`                | Server port (default: 5157) |
| `GEMINI_API_KEY`      | Google Gemini API key       |
| `OPENAI_API_KEY`      | OpenAI API key              |
| `REPLICATE_API_TOKEN` | Replicate API token         |

---

## 📄 License

This project is licensed under the **MIT License**. Feel free to use, contribute, or fork!

---

## 🤝 Contributing

Contributions are welcome! Please submit a pull request or open an issue for suggestions, bugs, or enhancements.

---

## 🧠 Made for the Future of AI-powered Productivity
