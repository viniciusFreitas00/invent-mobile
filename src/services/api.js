import * as axios from 'axios';

export default axios.create({
  baseURL: 'https://invent-api.herokuapp.com',
  //   baseURL: 'http://192.168.1.104:3333',
});
