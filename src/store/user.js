import firebase from "firebase";

export default {
  state: {
    user: {
      isAuth: false,
      userId: null,
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user.isAuth = true;
      state.user.userId = payload;
    },
    unSetUser(state) {
      state.user.isAuth = false;
      state.user.userId = null;
    },
  },
  actions: {
    signUp({ commit }, payload) {
      commit("setProcessing", true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit("setUser", user.uid);
          commit("setProcessing", false);
          console.log(user);
        })
        .catch(function(error) {
          commit("setProcessing", true);
          commit("setError", error.message);
          console.log(error);
        });
    },
    signIn({ commit }, payload) {
      commit("setProcessing", true);
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit("setUser", user.uid);
          commit("setProcessing", false);
          console.log(user);
        })
        .catch(function(error) {
          commit("setProcessing", true);
          commit("setError", error.message);
          console.log(error);
        });
    },
    signOut() {
      firebase.auth().signOut();
    },
    onStateChange({ commit }, payload) {
      payload ? commit("setUser", payload.userId) : commit("unSetUser");
    },
  },
  getters: { isAuth: state => state.user.isAuth },
  modules: {},
};
