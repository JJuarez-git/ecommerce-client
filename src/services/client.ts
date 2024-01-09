import axios from "axios";
import { CONFIG } from "../shared/config/config";

const _axios = axios.create({
  baseURL: CONFIG.API_URL + CONFIG.API_URI,
  timeout: 5000,
});

export default _axios;