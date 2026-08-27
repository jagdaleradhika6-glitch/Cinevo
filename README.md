# 🎬 Cinevo

> AI-powered movie discovery and recommendation platform built with React.js, Node.js, MongoDB, TMDB API, and Google Gemini AI.

## 🌐 Live Demo

🚀 **Live Website:** [https://cinevo-ctek.onrender.com/]

📂 **GitHub Repository:** (https://github.com/jagdaleradhika6-glitch/Cinevo)

---

## 📌 About Cinevo

Cinevo is a modern movie discovery platform that helps users explore movies and get personalized movie recommendations using AI.

Users can browse popular movies, search for movies, view detailed movie information, create an account, and receive AI-powered recommendations based on their personal preferences.

The AI recommendation system considers:

- 🎭 Genre
- 😊 Mood
- 📅 Decade
- 🌎 Language
- ⏱️ Movie Length

---

## ✨ Features

### 🎬 Movie Discovery
- Browse popular movies
- Discover different types of movies
- View movie posters and basic information
- View detailed movie information

### 🔍 Movie Search
- Search for movies using the TMDB API
- Display movie results dynamically
- Open individual movie details

### 🤖 AI Movie Recommendations
- Get personalized movie recommendations
- Select preferred genre
- Select current mood
- Select preferred decade
- Select preferred language
- Select preferred movie length
- Generate recommendations using Google Gemini AI
- Fetch recommended movie details from TMDB

### 🔐 Authentication
- User Sign Up
- User Sign In
- User Logout
- JWT-based authentication
- Persistent user session
- User profile information

### 👤 User Profile
- User avatar generation
- Display username
- Display email
- Profile dropdown menu
- Logout functionality

### 🎨 UI & Experience
- Modern dark-themed interface
- Responsive design
- Netflix-inspired movie browsing experience
- Interactive buttons and cards
- Loading states
- Toast notifications

---

## 🛠️ Tech Stack

### Frontend

- React.js
- React Router
- Tailwind CSS
- Zustand
- Axios
- React Hot Toast
- Lucide React
- Vite

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

### APIs

- TMDB API
- Google Gemini API

---

## 📂 Project Structure

```text
Cinevo/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── models/
│   │   └── user.model.js
│   │
│   ├── Server.js
│   ├── package.json
│   └── .gitignore
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Cardlist.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── RecommendedMovies.jsx
│   │   │
│   │   ├── lib/
│   │   │   └── AIModel.js
│   │   │
│   │   ├── pages/
│   │   │   ├── AIRecommendations.jsx
│   │   │   ├── Homepage.jsx
│   │   │   ├── Moviepage.jsx
│   │   │   ├── Signin.jsx
│   │   │   └── Signup.jsx
│   │   │
│   │   ├── Store/
│   │   │   └── AuthStore.js
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── package.json
│   └── .gitignore
│
└── README.md
