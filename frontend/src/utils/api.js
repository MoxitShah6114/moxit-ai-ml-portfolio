import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

const api = axios.create({
  baseURL: API_BASE_URL
})

export const healthCheck = async () => {
  return api.get('/health')
}

export const submitContact = async (data) => {
  return api.post('/contact', data)
}

export const classifyTerrain = async (imageBase64) => {
  return api.post('/demo/terrain', { image_base64: imageBase64 })
}

export const classifyDisease = async (imageBase64) => {
  return api.post('/demo/disease', { image_base64: imageBase64 })
}

export default api
