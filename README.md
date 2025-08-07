# Streamify

Streamify is a modern, full-stack web application designed for language learners to connect, chat, and collaborate in real time. It features user authentication, friend management, onboarding, and seamless messaging powered by the Stream API.

## Features

- **User Authentication:** Secure signup, login, and JWT-based session management.
- **Onboarding:** Personalized onboarding for language preferences and user profiles.
- **Friend System:** Send, accept, and manage friend requests; see recommended users.
- **Real-Time Chat & Video Calls:** 1:1 messaging and video call integration using Stream API, enabling seamless communication between users.
- **Customizable UI with 32+ DaisyUI themes:** Users can personalize their experience with a wide variety of modern, accessible themes.
- **Responsive UI:** Modern, themeable interface with a focus on user experience.

## Tech Stack

**Frontend:**
- React (Vite, Zustand, TanStack Query/React Query)
- Tailwind CSS & DaisyUI (32+ built-in themes)
- Stream Chat React SDK

**Backend:**
- Node.js, Express.js
- MongoDB (Mongoose)
- JWT for authentication
- Stream Chat API

## Folder Structure

```
Streamify/
  backend/    # Node.js/Express API, MongoDB models, controllers, routes
  frontend/   # React app, components, pages, hooks, state management
```

## Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB instance
- Stream API credentials

### Backend Setup
```bash
cd backend
npm install
# Create a .env file with MONGO_URI, JWT_SECRET_KEY, STREAM_API_KEY, STREAM_API_SECRET
npm start
```

### Frontend Setup
```bash
cd frontend
npm install
# Create a .env file with VITE_STREAM_API_KEY
npm run dev
```

### Environment Variables
- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET_KEY`: Secret for JWT
- `STREAM_API_KEY` / `STREAM_API_SECRET`: Stream Chat credentials
- `VITE_STREAM_API_KEY`: Stream Chat public key for frontend

## Usage
- Sign up and onboard with your language preferences
- Find and add friends, accept requests
- Start real-time chats and initiate video calls with your friends
- Personalize your UI with 32+ DaisyUI themes

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)
