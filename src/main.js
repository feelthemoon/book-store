import Vue from "vue";
import dotenv from "dotenv";
import VueMask from "v-mask";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

dotenv.config();

Vue.use(VueMask);
Vue.config.productionTip = false;

import "./registerServiceWorker";
import "@/assets/styles/main.scss";

new Vue({
  router,
  store,
  el: "#app",
  vuetify,
  render: (h) => h(App),
});
