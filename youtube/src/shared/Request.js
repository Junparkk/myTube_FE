import axios from 'axios';
import Category from '../components/Category';

const instance = axios.create({
  baseURL: 'http://54.180.137.157/',
  timeout: 1000,
  // headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('token'),
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json, text/plain,*/*',
  },
});

// instance.defaults.headers.common["Authorization"] =
//   localStorage.getItem("token")

//  timeout: 180000
//  withCredentials: false
//  headers: {
//    "Content-Type": "application/json"
//    Authorization: `Bearer ${localStorage.getItem("token")}`
//  }

export const apis = {
  // post
  posts: () => instance.get('/api/posts'),
  post: (postId) => instance.get(`/api/posts/${postId}`, {}),
  add: (data) => instance.post('/api/posts', data),

  //user
  createUser: (user) => instance.post('/api/user/signup', user),
  createLogin: (user) => instance.post('/api/user/login', user),
  checkToken: (user) => instance.post('/api/user/me', user),

  //search
  wordSearch: (searchWord) => instance.get(`/api/posts?search=${searchWord}`),
};

export default instance;
