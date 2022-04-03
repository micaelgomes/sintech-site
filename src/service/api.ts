import axios from "axios";

const api = axios.create({
  baseURL: "https://apisintech.com",
});

api.defaults.headers["Authorization"] = "70e15c8b-4547-405d-9e91-7bda4548c46b";

export default api;
