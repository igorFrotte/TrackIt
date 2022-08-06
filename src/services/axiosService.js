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

function deleteHabit(id) {
  const header = createHeader();
  const promise = axios.delete(BASE_URL + "habits/" + id, header);
  return promise;
}

function listToday() {
  const header = createHeader();
  const promise = axios.get(BASE_URL + "habits/today", header);
  return promise;
}

function markItem(id, status) {
  const header = createHeader();
  const promise = axios.post(BASE_URL + "habits/"+ id +"/"+ status, {}, header);
  return promise;
}

function getHistoric() {
  const header = createHeader();
  const promise = axios.get(BASE_URL + "habits/history/daily", header);
  return promise;
}

export { getHistoric, markItem, listToday, deleteHabit, listHabits, createHabit, singUp, login };