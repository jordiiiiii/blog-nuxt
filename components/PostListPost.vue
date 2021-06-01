<template>
  <v-card
    width="340px"
    hover
    class="ma-2"
    :to="{ name: 'posts-id', params: { id: post.id } }"
  >
    <!--    <v-img :src="$config.rootAPI + '/' + post.imageUrl" alt="post image" />-->
    <v-img :src="post.imageUrl" alt="post image" />
    <v-card-title>{{ post.title }}</v-card-title>

    <v-card-text>
      <CreatedAt class="mb-1" :post="post" />
      <div v-if="isRead(post.id)" class="success--text">
        <v-icon class="success--text" small>mdi-check</v-icon>
        Read
      </div>
      <div>{{ post.snippet }}</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-actions>
      <span v-for="tag_id in post.tag_ids" :key="`${post.id}-${tag_id}`">
        <v-btn
          class="mr-2"
          small
          :to="{ name: 'tags-id', params: { id: tag_id } }"
          @mousedown.stop
        >
          {{ getTag(tag_id).name }}
        </v-btn>
      </span>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PostListPost',
  props: {
    post: {
      type: Object,
      default() {
        return {}
      },
      required: true,
    },
    tags: {
      type: Array,
      default() {
        return []
      },
    },
  },
  computed: {
    ...mapGetters({
      isRead: 'users/postIsRead',
    }),
  },
  methods: {
    getTag(tagId) {
      return this.tags.find((t) => t.id === tagId)
    },
  },
}
</script>
