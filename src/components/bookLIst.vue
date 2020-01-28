<template>
  <v-container style="position: relative; right: 5%" class="url" grid-list-lg>
    <v-container style="position: absolute">
      <v-layout row wrap>
        <v-flex md4 offset-md9>
          <v-select label="genre" :items="genres" v-model="genr" multiple></v-select>
        </v-flex>
        <v-flex md4 offset-md9>
          <v-text-field label="search" v-model="search"></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>

    <v-layout style="width: 75%;" wrap>
      <v-flex v-for="(book, i) in filteredBooks" :key="i">
        <bookListItem :book="book" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import bookListItem from "@/components/booksListItem.vue";
export default {
  components: {
    bookListItem
  },
  data() {
    return {
      genr: [],
      genres: ["Fantasy", "Romantic", "Action", "Future", "History"],
      search: null
    };
  },

  computed: {
    filteredBooks() {
      let books = this.books;
      if (this.search) {
        books = books.filter(
          b => b.title.toLowerCase().indexOf(this.search.toLowerCase()) >= 0
        );
        if (this.genr.length) {
          books = books.filter(
            b => this.genr.filter(val => b.genr.indexOf(val) !== 1).length > 0
          );
        }
      }

      return books;
    },
    books() {
      return this.$store.getters.getBooks;
    }
  }
};
</script>

<style lang="scss" >
.url {
  background-size: cover;
  background-position: center;
  background-attachment: fixed scroll;
  background-repeat: no-repeat; /* Do not repeat the image */
  background-image: url("http://ae01.alicdn.com/kf/H9e8b9aa5fb3a4bbd963ce7fae9f095c3J.jpg_q50.jpg");
}

span:hover {
  color: red;
  cursor: pointer;
}
.overflow {
  overflow: hidden;
  display: block;
  position: relative;
}
.img {
  position: relative;
  border-radius: 10%;
}
.img:hover {
  transform: scale(3);
  position: relative;
}
</style>