import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://54.180.137.157/',
  timeout: 1000,
  // headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
  headers: {
    Authorization:
      'Bearer ' +
      `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZG9uZ2h5dW4yMyIsImlhdCI6MTY0NTQwNDc4OH0.IY0iP5J94IbOdEdffnz_0WOXZl9WTYouEjavtVWAAEA`,
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
export default instance;
