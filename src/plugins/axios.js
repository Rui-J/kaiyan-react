import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://baobab.kaiyanapp.com/api/v4/',
  timeout: 1000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  }
});

export default instance