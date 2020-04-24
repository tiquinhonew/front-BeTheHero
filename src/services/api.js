import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-be-the.herokuapp.com',
})

export default api;