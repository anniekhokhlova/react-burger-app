import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-project-app.firebaseio.com/'
});

export default instance;