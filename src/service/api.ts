import axios from "axios";

const api = axios.create({
  baseURL: "https://apisintech.com/api/v1",
});

api.defaults.headers["Authorization"] = "48732fc7-5182-494a-8178-4af07167d334";
api.defaults.headers["Access-Control-Allow-Origin"] = "*";

export default api;
