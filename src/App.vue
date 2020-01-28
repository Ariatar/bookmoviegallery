<template>
  <v-app class>
    <v-navigation-drawer temporary app v-model="drawer"></v-navigation-drawer>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Lara sig</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
        text
        small
        :to="item.route"
        class="pa-1 mr-5 red--text before d-inline"
        v-for="item in menuItems"
        :key="item.title"
      >
        <v-icon class="black--text" left>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
      <div>
        <h4 @click.prevent="signOut" class="black--text logout">
          Logout
          <v-icon right>mdi-logout</v-icon>
        </h4>
      </div>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-content class="grey darken-4">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      drawer: true
    };
  },
  computed: {
    isuserAuth() {
      return this.$store.getters.isAuth;
    },
    menuItems() {
      return this.isuserAuth
        ? [
            { title: "читать", icon: "mdi-apple", route: "/books" },
            { title: "слова", icon: "mdi-apple", route: "/words" },
            {
              title: "мой кабинет",
              icon: "mdi-account",
              route: "/myOffice"
            }
          ]
        : [
            { title: "войти", icon: "mdi-cup", route: "/signin" },
            {
              title: "зарегистрироваться",
              icon: "mdi-apple",
              route: "/signup"
            }
          ];
    }
  },

  methods: {
    ...mapActions(["signOut"])
  }
};
</script>

<style lang="scss">
div .before {
  position: relative;
  display: inline;
  cursor: pointer;
}
div .before::before {
  content: "";
  position: absolute;
  background-color: purple;
  width: 0%;
  left: 15px;
  top: 30px;
  height: 4px;
  opacity: 2;
}
div .before:hover::before {
  width: 70%;
  transition: 0.9s;
}
div .logout {
  position: relative;
}
div .logout::before {
  content: "";
  content: "";
  position: absolute;
  background-color: rgb(20, 20, 15);
  border-radius: 50%;
  width: 0%;
  top: -5px;
  left: -8px;
  height: 4px;
  opacity: 0.5;
}

div .logout:hover::before {
  height: 150%;
  width: 110%;
  transition: 0.9s;
  cursor: pointer;
}
</style>
