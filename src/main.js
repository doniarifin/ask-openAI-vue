import { createApp } from 'vue'
import './style.css'
import './index.css'
import App from './App.vue'
//-- axios
import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App);
app.use(VueAxios, axios);

app.mount('#app');

