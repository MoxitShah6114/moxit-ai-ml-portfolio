# Moxit Shah — AI/ML Portfolio

A full-stack AI/ML portfolio showcasing projects with live inference demos.

## Quick Start

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend runs at `http://localhost:5173`

### Backend + n8n
```bash
docker-compose up
```
- Backend API: `http://localhost:8000`
- API Docs: `http://localhost:8000/docs`
- n8n: `http://localhost:5678`

## Environment Variables

Create `.env`:
```env
VITE_API_URL=http://localhost:8000/api
N8N_CONTACT_WEBHOOK=<your_n8n_webhook_url>
SMTP_SERVER=<smtp_server>
SMTP_USER=<smtp_user>
SMTP_PASS=<smtp_password>
```

## Tech Stack

**Frontend:** React 18, Vite, Tailwind CSS, Framer Motion, Axios

**Backend:** FastAPI, PyTorch, TensorFlow, Uvicorn

**Automation:** n8n, Docker, GitHub Actions

**Deployment:** GitHub Pages (frontend), Railway/Render (backend)

## Features

- 🎨 Dark theme with smooth animations
- 🤖 Live AI demo (terrain classification, disease detection)
- 📊 Interactive stats and timeline
- ✉️ Contact form with n8n automation
- 🚀 CI/CD with GitHub Actions
- 🐳 Docker containerization

## Project Structure

```
moxit-portfolio/
├── frontend/          # React + Vite + Tailwind
├── backend/           # FastAPI + ML models
├── automation/        # n8n workflows
├── .github/workflows/ # CI/CD
└── docker-compose.yml # Local dev setup
```

## Build & Deploy

**Frontend:**
```bash
npm run build  # outputs to dist/
```

**Backend:**
```bash
docker build -t portfolio-backend ./backend
docker run -p 8000:8000 portfolio-backend
```

## License

All rights reserved © 2026 Moxit Shah
