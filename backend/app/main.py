from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import health, demo, contact

app = FastAPI(title="Moxit Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router, prefix="/api", tags=["health"])
app.include_router(demo.router, prefix="/api/demo", tags=["demo"])
app.include_router(contact.router, prefix="/api", tags=["contact"])

@app.get("/")
def read_root():
    return {"message": "Moxit Portfolio API"}
