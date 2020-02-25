import config from "../config";

const axios = require("axios");
const instance = axios.create({
  baseUrl: config.apiUrl,
  headers: {
    "Content-Type": "applicaton/json"
  }
});

export const httpHelper = {
  get,
  post,
  getParam,
  put
};

//get request function.
async function get(url) {
  return instance
    .get(`${url}`)
    .then(handleResponse)
    .catch(err => {
      return Promise.reject(err);
    });
}

//get request with parameters.
async function getParam(url, body) {
  return instance
    .get(`${url}`, {
      params: body
    })
    .then(handleResponse)
    .catch(err => {
      return Promise.reject(err);
    });
}

//post request function.
async function post(url, payload) {
  return instance
    .post(`${url}`, payload)
    .then(handleResponse)
    .catch(err => {
      return Promise.reject(err);
    });
}

//put request function.
async function put(url, payload) {
  return instance
    .put(`${url}`, payload)
    .then(handleResponse)
    .catch(err => {
      return Promise.reject(err);
    });
}

//handling responses from the api.
function handleResponse(response) {
  if (response.status === 404) {
    console.log("Error 404");
  }
  if (!response.ok) {
    if (response.status === 401) {
      console.log("Status: 401");
    }
  }
  return response.data;
}
