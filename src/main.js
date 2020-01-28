import firebase from "firebase";
import Vue from "vue";
import "firebase/firebase-app";
import App from "./App.vue";
import firebaseConfig from "./firebase";
import vuetify from "./plugins/vuetify";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "vuetify/dist/vuetify.min.css";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    const isUser = this;
    firebase.auth().onAuthStateChanged(function(user) {
      isUser.$store.dispatch("onStateChange", user);
    });
  },
}).$mount("#app");
