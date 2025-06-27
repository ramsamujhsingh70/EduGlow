# 🌟 EduGlow - Full Stack Learning Platform

EduGlow is a modern full-stack educational platform designed to simplify online learning. Built using React (Vite) for the frontend and Node.js/Express for the backend, EduGlow supports user management, dynamic content, and (optionally) payment integration.

## 🚀 Live Demo
🔗 **Frontend (Vercel)**: (https://edu-glow-zq3p.vercel.app/)

## 🧩 Project Structure

EduGlow/
├── frontend/ → React (Vite + Tailwind CSS)
└── backend/ → Node.js + Express + MongoDB
## 🛠️ Tech Stack
### 🖥 Frontend
- Vite + React
- Tailwind CSS
- Axios
### ⚙ Backend
- Node.js + Express
- MongoDB (Mongoose)
- Razorpay (optional)
- dotenv, CORS
## 📦 Getting Started Locally
### 🔧 1. Clone the Repository
git clone https://github.com/ramsamujhsingh70/EduGlow.git
cd EduGlow
⚙️ 2. Setup Backend
bash
Copy code
cd backend
npm install
Create a .env file in backend/:
env
PORT=5000
MONGODB_URI=your_mongodb_uri
Run the backend:
npm start
3. Setup Frontend
cd ../frontend
npm install
VITE_API_URL=http://localhost:5000
Run the frontend:
npm run dev
☁️ Deployment
🔹 Frontend (Vercel)
Root directory: frontend
Build command: npm run build
Output directory: dist

🔹 Backend (Render)
Root directory: backend

Build command: npm install

Start command: npm start
