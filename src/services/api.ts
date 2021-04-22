import axios from 'axios';

const api = axios.create({
    baseURL: "http://9.163.4.47:3333"
});

export default api;