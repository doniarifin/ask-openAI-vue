import { createApp } from 'vue'
import './style.css'
import './index.css'
import App from './App.vue'
//-- axios
import axios from "axios";
import VueAxios from "vue-axios";
//-- router
import router from "./router";

//-- mdicon
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

const app = createApp(App);
app.use(VueAxios, axios);
app.use(router);
app.use(mdiVue, {
  icons: mdijs
});

app.mount('#app');

