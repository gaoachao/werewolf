import { createApp } from 'vue'

import App from './App.vue';
import router from "./router";

import "./normalize.css";
import "./index.scss";

createApp(App)
  .use(router)
  .mount('#app')
