<template>
  <v-container class="PostView">
    <v-row>
      <v-col cols="12">
        <h1 class="d-flex d-sm-none text-h4">{{ post.title }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="5" md="4" cols="12">
        <!--        <v-img :src="$config.rootAPI + '/' + post.imageUrl" alt="post image" />-->
        <v-img :src="post.imageUrl" alt="post image" />
      </v-col>
      <v-col sm="7" md="8" cols="12">
        <h1 class="d-none d-sm-flex text-h4 mb-4">{{ post.title }}</h1>
        <CreatedAt :post="post" />
        <div v-if="isRead(post.id)" class="success--text mt-2">
          <v-icon class="success--text" small>mdi-check</v-icon>Read
        </div>
        <div v-else class="mt-2">
          <v-btn
            v-if="$auth.loggedIn"
            text
            color="warning"
            x-small
            @click="markRead"
          >
            Mark Read
          </v-btn>
        </div>
        <h2 class="subtitle-1 font-weight-thin my-2">By {{ creator }}</h2>
        <div>
          <IcoLinkedin />
          <IcoFacebook />
          <IcoTwitter class="ml-1" />
          <IcoGitHub class="ml-1" />
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <span v-for="tag_id in post.tag_ids" :key="tag_id">
          <v-btn
            x-small
            class="mr-1 my-2"
            :to="{ name: 'tags-id', params: { id: tag_id } }"
          >
            {{ getTag(tag_id).name }}
          </v-btn>
        </span>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <MarkdownDisplay :markdown="post.body" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'PostsId',
  data() {
    return {
      creator: 'Jordi Gorbe Neira, Director of content',
    }
  },
  head() {
    return {
      title: 'Post',
    }
  },
  computed: {
    ...mapGetters({
      isRead: 'users/postIsRead',
    }),
    ...mapState({
      tags: (state) => state.tags.tags,
      posts: (state) => state.posts.posts,
    }),
    post() {
      return this.posts.find((p) => p.id === this.$route.params.id)
    },
  },
  methods: {
    getTag(tagId) {
      return this.tags.find((t) => t.id === tagId)
    },
    markRead() {
      this.$store.dispatch('users/markReadPost', this.post.id)
    },
  },
}
</script>

<style scoped>
svg {
  color: var(--navy);
}

svg:hover {
  color: var(--teal-light);
}
</style>
