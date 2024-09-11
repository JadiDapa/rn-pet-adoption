import axios from "axios"

export const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
