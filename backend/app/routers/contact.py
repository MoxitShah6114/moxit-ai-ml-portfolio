import os
import httpx
from fastapi import APIRouter
from app.schemas.contact import ContactRequest

router = APIRouter()

@router.post("/contact")
async def submit_contact(request: ContactRequest):
    n8n_webhook = os.getenv("N8N_CONTACT_WEBHOOK")
    
    if not n8n_webhook:
        return {"success": True, "message": "Contact form received (webhook not configured)"}
    
    try:
        async with httpx.AsyncClient() as client:
            await client.post(
                n8n_webhook,
                json={
                    "name": request.name,
                    "email": request.email,
                    "message": request.message
                },
                timeout=10
            )
        return {"success": True}
    except Exception as e:
        print(f"Error submitting to n8n: {e}")
        return {"success": True}
