import axios from "axios";

const BASE_URL = process.env.API_URL;
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export { axiosInstance, BASE_URL };
