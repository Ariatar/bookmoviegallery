<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card class="elevation-12">
              <v-toolbar color="purple" dark text>
                <v-toolbar-title>Form</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-alert type="warning" :value="getError">{{ getError }}</v-alert>
                <v-form>
                  <v-text-field
                    v-model="email"
                    label="email"
                    prepend-icon="mdi-account"
                    type="email"
                  />

                  <v-text-field
                    v-model="password"
                    label="Password"
                    prepend-icon="mdi-lock"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn @click.prevent="signIn" large color="primary">Enter</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signIn() {
      this.$store.dispatch("signIn", {
        email: this.email,
        password: this.password
      });
    }
  },
  computed: {
    ...mapGetters(["getError", "isAuth"])
  },
  watch: {
    isAuth(val) {
      if (val) {
        this.$router.push("/");
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
