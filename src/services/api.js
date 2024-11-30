import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:7007",
});

export default api;
