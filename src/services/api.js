import axios from "axios";

// Base URL for JSON Server
const API_URL = "http://localhost:3000/tasks";

// Get all tasks
export const getTasks = () => {
  return axios.get(API_URL);
};

// Create new task
export const createTask = (task) => {
  return axios.post(API_URL, task);
};

// Update existing task
export const updateTask = (id, task) => {
  return axios.put(`${API_URL}/${id}`, task);
};

// Delete task
export const deleteTask = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
