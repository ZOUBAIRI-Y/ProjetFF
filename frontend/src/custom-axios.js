import axios from "axios";

const p1 = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

const token = localStorage.getItem('token');
if (token) {
  p1.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default p1;

export function getUser() {
  if (localStorage.getItem("user")) return JSON.parse(localStorage.getItem("user"));
}