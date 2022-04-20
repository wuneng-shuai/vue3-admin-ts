import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';
import store from './store';
import './mock/mockServer';
import 'normalize.css'
import '.././src/styles/common.scss'
createApp(App).use(ElementPlus).use(store).use(router)
  .mount('#app');
