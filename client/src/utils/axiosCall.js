import axios from 'axios';

export default axios.create({
  baseURL:'http://192.168.56.1/labify/',
  'Content-Type': 'application/x-www-form-urlencoded',
  timeout: 10000
});