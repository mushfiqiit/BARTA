import axios from "axios";

const apiEndpoint = "http://127.0.0.1:8000/login/users/";

export function register(user) {

  return axios.post(apiEndpoint, {
    username: user.username,
    password: user.password
  });


}

export default {
  register
};