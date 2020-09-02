import axios from 'axios';

const axiosPages = axios.create({
    baseURL: 'https://page-content.firebaseio.com/'
});

export default axiosPages;