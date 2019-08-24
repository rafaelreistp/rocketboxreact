import axios from 'axios';

const api = axios.create({
    baseURL: 'https://rafaelreistp-rocketbox.herokuapp.com'
});

export default api;