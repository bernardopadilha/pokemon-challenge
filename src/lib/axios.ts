import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_NEXT_PUBLIC_API_ENDPOINT,
})