from fastapi import APIRouter
from app.schemas.demo import DemoRequest, DemoResponse, DiseaseResponse
from app.models.terrain_classifier import classify_terrain
from app.models.disease_detector import classify_disease

router = APIRouter()

@router.post("/terrain", response_model=DemoResponse)
async def terrain_classification(request: DemoRequest):
    return await classify_terrain(request.image_base64)

@router.post("/disease", response_model=DiseaseResponse)
async def disease_classification(request: DemoRequest):
    return await classify_disease(request.image_base64)
