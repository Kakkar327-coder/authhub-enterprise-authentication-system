# AuthHub 🔐

AuthHub is an Enterprise Authentication System built using the **MERN (MongoDB, Express, React, Node.js) Stack**. It features a modern, clean, premium minimalist dark-mode UI with dynamic interactive layouts, robust backend controllers, secure password hashing, and token-based sessions.

---

## 🚀 Key Features

*   **Secure Authentication**: JWT-based authentication using dynamic access and refresh tokens.
*   **Password Security**: Industry-standard password hashing using `bcrypt` pre-save hooks.
*   **Password Recovery**: Email reset links powered by `nodemailer` and custom cryptographically secure tokens.
*   **Premium Visual Design**: Cyber-obsidian dark theme built with `Plus Jakarta Sans` typography, high-precision glassmorphism elements, and glowing interactive hover effects.
*   **Consistent API Layer**: Implemented standardized `ApiResponse` contracts for clean, predictable integration between the React frontend and Express controllers.
*   **Modular Architecture**: Clean separation of routes, models, controllers, and services on the backend.

---

## 🛠️ Project Structure

```text
├── authhub-backend/           # Express Server & DB Connection
│   ├── controllers/           # Route logic (Login, Signup, Recovery)
│   ├── models/                # MongoDB user schemas and middleware
│   ├── routes/                # Endpoint routing path definitions
│   ├── services/              # Business logic & authentication algorithms
│   ├── utility/               # Helper modules (email transporter)
│   └── server.js              # Server entry point
│
├── authhub-frontend/my-app/   # Vite + React Frontend Client
│   ├── src/
│   │   ├── pages/             # Auth pages (Login, Signup, Recover)
│   │   ├── App.jsx            # Routing and application entry
│   │   ├── App.css            # Premium layout and styling styles
│   │   └── config.js          # API environment configurations
```

---

## ⚙️ Environment Configuration

Create a `.env` file in the root directory:

```env
MONGO_URI=mongodb+srv://...           # MongoDB database connection string
PORT=3000                             # Express server port
ACC_KEY=...                          # JWT access token secret key
SEC_KEY=...                          # JWT refresh token secret key
MAIL=...                              # Nodemailer host email address
PASSI=...                             # Nodemailer app-specific password
```

---

## 💻 Local Setup & Execution

### 1. Clone & Set Up Environment
Configure the `.env` variables at the root of the project.

### 2. Run the Backend Server
```bash
cd authhub-backend
npm install
npm run dev
```
The backend server runs on `http://localhost:3000`.

### 3. Run the Frontend Client
```bash
cd authhub-frontend/my-app
npm install
npm run dev
```
The frontend client launches on `http://localhost:5173`.

---

## 🌐 Production Deployment

*   **Frontend**: Ready for edge hosting on **Vercel** with the `VITE_API_URL` environment variable.
*   **Backend**: Ready to deploy as a Web Service on **Render** (configure all environment variables in the Render dashboard).