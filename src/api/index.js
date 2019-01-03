import axios from 'axios'

export const API = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://plate-api.azurewebsites.net'
      : 'http://localhost:5000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export function getHeaders(token) {
  return { Authorization: `Bearer ${token}` }
}
