<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="display-1 pt-3">{{ post.title }}</div>
        <CreatedAt :post="post" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="8">
        <div>{{ post.snippet }}</div>
      </v-col>
      <v-col sm="6" md="4" cols="12">
        <!--        <v-img :src="$config.rootAPI + '/' + post.imageUrl" alt="post image" />-->
        <v-img :src="post.imageUrl" alt="post image" />
      </v-col>
    </v-row>

    <v-combobox
      v-model="postTags"
      :items="tags"
      item-text="name"
      multiple
      chips
      deletable-chips
      hide-selected
      return-object
    ></v-combobox>

    <v-btn :to="{ name: 'posts-id', params: { id: post.id } }">Read</v-btn>
    <v-btn :to="{ name: 'admin-posts-id-edit', params: { id: post.id } }">
      Edit
    </v-btn>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import _ from 'lodash'

export default {
  name: 'AdminPostsId',
  head() {
    return {
      title: 'Admin posts id',
    }
  },
  computed: {
    ...mapState({
      posts: (state) => state.posts.posts,
      tags: (state) => state.tags.tags,
    }),
    ...mapGetters({
      getTag: 'tags/get',
    }),
    post() {
      return this.posts.find((p) => p.id === this.$route.params.id) || {}
    },
    postTags: {
      get() {
        const tagIds = this.post.tag_ids
        return tagIds && tagIds.map((id) => this.getTag(id))
      },
      async set(newTags) {
        let createdTag = newTags.find((t) => typeof t === 'string')
        if (createdTag) {
          createdTag = await this.$store.dispatch('tags/create', {
            name: createdTag,
          })
          await this.$store.dispatch('tags/addTagFromPost', {
            tag: createdTag,
            post: this.post,
          })
        } else {
          const addedTags = _.differenceBy(newTags, this.postTags, 'id')
          const removedTags = _.differenceBy(this.postTags, newTags, 'id')
          if (addedTags.length > 0) {
            await this.$store.dispatch('tags/addTagFromPost', {
              tag: addedTags[0],
              post: this.post,
            })
          }
          if (removedTags.length > 0) {
            await this.$store.dispatch('tags/removeTagFromPost', {
              tag: removedTags[0],
              post: this.post,
            })
          }
        }
      },
    },
  },
}
</script>
