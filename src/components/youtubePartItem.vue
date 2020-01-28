<template>
  <v-card class="purple">
    <v-card-title class="text-center">{{part.title}}</v-card-title>
    <v-card-text>
      <div>{{part.youtubeId}}</div>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn large text class="primary">Open</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    part: {
      type: Object,
      required: true
    },
    bookId: {
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>