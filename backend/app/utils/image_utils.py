import base64
import io
from PIL import Image
import numpy as np

def decode_image_base64(image_base64: str) -> Image.Image:
    image_data = base64.b64decode(image_base64)
    return Image.open(io.BytesIO(image_data))

def image_to_array(image: Image.Image, size: tuple = (224, 224)) -> np.ndarray:
    image = image.convert('RGB')
    image = image.resize(size, Image.Resampling.LANCZOS)
    return np.array(image, dtype=np.float32) / 255.0

def array_to_base64(array: np.ndarray) -> str:
    if array.dtype != np.uint8:
        array = (array * 255).astype(np.uint8)
    image = Image.fromarray(array)
    buffer = io.BytesIO()
    image.save(buffer, format='PNG')
    return base64.b64encode(buffer.getvalue()).decode()
