import axios from 'axios';
import config from './config';

const instanse = axios.create({
  baseURL: config.apiUrl
});

export default instanse;