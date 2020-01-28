<template>
  <v-card class="grey darken-1">
    <v-container fluid>
      <v-layout row>
        <v-flex class="overflow" xs12 md3>
          <v-img height="200px" class="img" :src="book.img"></v-img>
          <v-btn :to="book.youtube" class="mt-2 white--text" small text>
            <v-icon left class="red--text">mdi-youtube</v-icon>Youtube
          </v-btn>

          <span>ball: {{book.rating}}</span>
        </v-flex>

        <v-flex md9 xs8>
          <v-card-title>Название: {{book.title}}</v-card-title>
          <v-card-subtitle>{{book.author}}</v-card-subtitle>
          <div class="hidden-xs-only">
            <h4 class="black--text">Серия: {{book.series}}</h4>

            <h4>ЖАНР: {{book.genr}}</h4>
            <h5 class="black--text">parts: {{book.part}}</h5>
          </div>

          <v-card-text>
            <span @click="isHidden = !isHidden" style="font-size: 12px">Аннотация на книгу «Эрагон»:</span>
            <v-divider></v-divider>
            <br />
            <div
              v-if="isHidden"
              style=" font-style: italic"
              class="hidden-xs-only hidden-sm-only"
            >{{book.desc}}</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              :to="{name: 'book', params:{id:book.id}}"
              class="red--text"
              text
            >status: {{book.status}}</v-btn>
          </v-card-actions>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isHidden: true
    };
  }
};
</script>

<style lang="scss" scoped>
</style>