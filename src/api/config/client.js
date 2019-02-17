const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: 'https://swapi.co/api'
});

module.exports = axiosInstance;
