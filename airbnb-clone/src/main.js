// main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from './axios'; // Adjust the path based on your project structure

const app = createApp(App);
app.use(router);
app.config.globalProperties.$http = axios;
app.mount('#app');
