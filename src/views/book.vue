<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm10 offset-sm1>
        <bookDetail :book="book"></bookDetail>
      </v-flex>
      <v-flex xs12 sm10 offset-sm1 v-for="part in book.parts" :key="part.id">
        <youtubePartItem :part="part" :bookId="book.id" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import youtubePartItem from "@/components/youtubePartItem.vue";
import bookDetail from "../components/bookDetail.vue";
export default {
  components: {
    bookDetail,
    youtubePartItem
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    book() {
      return this.$store.getters.getBooks.find(b => b.id == this.id);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>