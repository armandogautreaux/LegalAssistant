import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8080/api'
  // withCredentials: true,
  // headers: {
  //   Accept: 'application/json',
  //   'Content-Type': 'application/json',
  //   Cache: 'no-cache'
  // }
});
