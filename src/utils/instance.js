import axios from 'axios';
export const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000, // timeout after 5s
});
