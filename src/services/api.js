import axios from 'axios';

// Create an axios instance with a base URL
const api = axios.create({
    baseURL: 'http://127.0.0.1:5000/',
})

export default api;