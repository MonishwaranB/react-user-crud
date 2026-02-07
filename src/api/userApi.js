import axios from "axios";

const BASE_URL = "https://react-user-crud-z52i.onrender.com/users";

// Get all users
export const getUsers = () => axios.get(BASE_URL);

// Create user
export const createUser = (data) => axios.post(BASE_URL, data);

// Update user
export const updateUser = (id, data) => axios.put(`${BASE_URL}/${id}`, data);

// Delete user
export const deleteUser = (id) => axios.delete(`${BASE_URL}/${id}`);
