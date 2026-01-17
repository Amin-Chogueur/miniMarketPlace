# Highlights

🛒 Full-Stack Product Store

🧰 REST API with Node.js & Express

🗄️ PostgreSQL Database Integration

🧬 Drizzle ORM for type-safe database queries

🟦 TypeScript-powered API

⚛️ Modern React Frontend

🎨 Beautiful UI with Tailwind CSS & DaisyUI

⚡ Data Fetching & Caching using TanStack Query

🔄 End-to-End API ↔ Frontend Integration

# Backend (/backend/.env)

PORT=3000
DATABASE_URL=<YOUR_DB_URL>
NODE_ENV=development

CLERK_PUBLISHABLE_KEY=<YOUR_CLERK_PUBLISHABLE_KEY>
CLERK_SECRET_KEY=<YOUR_CLERK_SECRET_KEY>

FRONTEND_URL=http://localhost:5173

# Frontend (/frontend/.env)

VITE_CLERK_PUBLISHABLE_KEY=<YOUR_CLERK_PUBLISHABLE_KEY>
VITE_API_URL=http://localhost:3000/api

# Run the Backend

cd backend
npm install
npm run dev

# Run the Frontend

cd frontend
npm install
npm run dev
