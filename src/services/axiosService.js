import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/";

function createHeader() {
  const auth = JSON.parse(localStorage.getItem("trackItUser"));
  const config = {
    headers: { Authorization: `Bearer ${auth.token}` }
  };
  return config;
}

function singUp(body) {
  const promise = axios.post(BASE_URL + "auth/sign-up", body);
  return promise;
}

function login(body) {
  const promise = axios.post(BASE_URL + "auth/login", body);
  return promise;
}

function createHabit(body) {
  const header = createHeader();
  const promise = axios.post(BASE_URL + "habits", body, header);
  return promise;
} 

function listHabits() {
  const header = createHeader();
  const promise = axios.get(BASE_URL + "habits", header);
  return promise;
}

export { listHabits, createHabit, singUp, login };