import { createApp } from "vue";
import axios from 'axios';
// axios.defaults.baseURL = 'https://myfirstapp-41187-default-rtdb.asia-southeast1.firebasedatabase.app';
// axios.defaults.headers.common['Authorization'] = "this test for header"
import App from "./App.vue";
import router from "./router";


// bootstrap css file
import "bootstrap/dist/css/bootstrap.min.css";

// Importing the global css file
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from '@fortawesome/free-regular-svg-icons';




import "@/assets/css/style.scss";

// import i18n 

import VueI18n from "vue-i18n";
import i18n from './i18n';

import mitt from "mitt";

const emitter = mitt();

library.add(fas, fab, far);
dom.watch()

const vueApp = createApp(App);
vueApp.component('fa', FontAwesomeIcon)
vueApp.provide("emitter", emitter).use(router)
.use(i18n).use(VueI18n)
.mount("#app");

import "bootstrap/dist/js/bootstrap.js"
