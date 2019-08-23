import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import * as firebase from 'firebase/app';

import App from './App.vue';
import router from './router';
import store from './store';

import 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_CLOUD_FIRESTORE_PROJECT_ID,
});

const db = firebase.firestore();

export default db;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
