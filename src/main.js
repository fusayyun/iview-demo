import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import '../my-theme/index.less';

Vue.config.productionTip = false;
// 下載plugin
Vue.use(ViewUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
