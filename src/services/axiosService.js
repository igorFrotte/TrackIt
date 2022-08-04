import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/";

function createHeader() {
  const auth = localStorage.getItem("trackItUser");
  const config = {
    headers: { Authorization: `Bearer ${auth.token}` }
  };
  return config;
}

function singUp(body) {
  const promise = axios.post(BASE_URL + "auth/sign-up", body);
  return promise;
}
/* 
function create(body) {
  const config = createHeader();
  const promise = axios.post(`${BASE_URL}/habits`, body, config);
  return promise;
} */

export { singUp };