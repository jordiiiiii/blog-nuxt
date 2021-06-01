<template>
  <v-row justify="center" align="center">
    <v-col cols="12" md="10">
      <h1 class="display-4 ma-4 d-flex justify-center">All Posts</h1>
      <PostTable :posts="posts" :headers="headers" />
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Extra',
  head() {
    return {
      title: 'Posts',
    }
  },
  computed: {
    ...mapState({
      posts: (state) => state.posts.posts,
    }),
    headers() {
      return [
        { text: 'Read', value: 'read', sortable: false, width: '70px' },
        { text: 'Title', value: 'title' },
        { text: 'Date', value: 'sortable_created_at' },
        { text: 'Tags', value: 'tags', sortable: false },
      ]
    },
  },
}
</script>
