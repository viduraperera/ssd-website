import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000/api" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).payload.token
    }`;
  }
  return req;
});

//users auth urls
export const login = (credentials) =>
  axios.post("http://localhost:3000/api/login", credentials);

export const register = (user) =>
  axios.post("http://localhost:3000/api/user", user);

// Portal users
export const fetchUsers = () => API.get("/user");
export const fetchUser = (id) => API.get(`/user/${id}`);
export const deleteUser = (userID) => API.delete(`/user/${userID}`);
export const updateUser = (user) => API.patch(`/user/${user.id}`, user);
export const updatePassword = (user) =>
  API.patch(`/user/resetPassword/${user.id}`, user);
export const updateProfile = (user) =>
  API.patch(`/user/profile/${user.id}`, user);