from pydantic import BaseModel

class DemoRequest(BaseModel):
    image_base64: str

class DemoResponse(BaseModel):
    label: str
    confidence: float
    heatmap_base64: str = None

class DiseaseResponse(BaseModel):
    predictions: list[dict]
