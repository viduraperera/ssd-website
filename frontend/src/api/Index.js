import axios from "axios";

const API = axios.create({ baseURL: "https://localhost:5000/api" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).accessToken
      }`;
  }
  return req;
});

//users auth urls
export const login = (credentials) =>
  axios.post("https://localhost:5000/api/sessions", credentials);

export const register = (user) =>
  axios.post("https://localhost:5000/api/users", user);

// Portal users
export const fetchUsers = () => API.get("/users");
export const fetchUser = (id) => API.get(`/users/${id}`);
export const deleteUser = (userID) => API.delete(`/user/${userID}`);
export const updateUser = (user) => API.patch(`/user/${user.id}`, user);
export const updatePassword = (user) =>
  API.patch(`/user/resetPassword/${user.id}`, user);
export const updateProfile = (user) =>
  API.patch(`/user/profile/${user.id}`, user);

// Messages
export const addMessage = (message) => API.post('/message', message)