import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import api from "./api";
import md from "./utils/markdown/index.js";
import Prism from "Prism";
import keycodes from "./utils/keycodes.js";

// console.log(Prism);
Vue.config.productionTip = false;

Vue.use(keycodes);
Vue.prototype.$api = api;
Vue.prototype.$md = md;
Vue.prototype.Prism = Prism;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
