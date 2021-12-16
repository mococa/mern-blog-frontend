import axios from "axios";
const prod = window.location.hostname !== "localhost";
const baseURL = prod ? process.env.REACT_APP_BLOG_API : "http://localhost:4000";

const Axios = axios.create({
  baseURL,
  withCredentials: true,
  crossDomain: true,
  headers: {
    "Content-Type": "application/json",
  },
});
export const request = {
  get: async (path) => {
    return Axios.get(path);
  },
  post: async (path, body) => {
    return Axios.post(path, body);
  },
  delete: async (path) => {
    return Axios.delete(path);
  },
  put: async (path, data = undefined) => {
    return Axios.put(path, data);
  },
};
