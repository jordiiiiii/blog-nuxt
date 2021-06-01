<template>
  <v-container class="TagList">
    <h1 class="display-3 ma-4 d-flex justify-center">
      Posts with Tag "{{ tag.name }}"
    </h1>
    <PostTable :posts="postsOnTag" :headers="headers" />
    <div class="d-flex flex-wrap">
      <div v-for="post in postsOnTag" :key="post.id">
        <PostListPost :post="post" :tags="tags"></PostListPost>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TagsId',
  head() {
    return {
      title: 'Tag',
    }
  },
  computed: {
    ...mapState({
      tags: (state) => state.tags.tags,
      posts: (state) => state.posts.posts,
    }),
    tag() {
      return this.tags.find((t) => t.id === this.$route.params.id)
    },
    postsOnTag() {
      return this.posts.filter((p) => {
        return this.tag.post_ids.includes(p.id)
      })
    },
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
