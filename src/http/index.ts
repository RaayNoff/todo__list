import axios from "axios";
import { BackendApiUrls } from "../types/urls";

const $api = axios.create({
  withCredentials: true,
  baseURL: BackendApiUrls.LOCATION,
});

$api.interceptors.request.use((config) => {
  if (!config.headers) return;

  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});
