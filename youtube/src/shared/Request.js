import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://54.180.137.157/',
  timeout: 1000,
  // headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
  headers: {
    Authorization:
      'Bearer ' +
      `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZG9uZ2h5dW4yMyIsImlhdCI6MTY0NTQwNDc4OH0.IY0iP5J94IbOdEdffnz_0WOXZl9WTYouEjavtVWAAEA`,
      "content-type": "application/json;charset=UTF-8",
      accept: "application/json, text/plain,*/*",
  },
});

export const apis = {
  createUser: (user) => instance.post("/api/user/signup", user),
  createLogin: (user) => instance.post("/api/user/login", user),
  checkToken: (user) => instance.post("/api/user/me", user)
};
