// src/axios.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3333', // Adjust the base URL based on your Adonis.js server configuration
});

export default instance;
