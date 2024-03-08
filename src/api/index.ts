import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://43.203.36.63:8080',
});
