<template>
  <v-container>
    <h1>Post Edit Page</h1>
    <PostEditForm :post="post" :save="savePost" :btn="btnText" />
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'AdminPostsIdEdit',
  data() {
    return {
      btnText: 'update',
      valid: false,
    }
  },
  head() {
    return {
      title: 'Admin posts id edit',
    }
  },
  computed: {
    ...mapState({
      posts: (state) => state.posts.posts,
    }),
    ...mapGetters({
      getPost: 'posts/get',
    }),
    post() {
      return this.getPost(this.$route.params.id)
    },
  },
  methods: {
    async savePost(newPost) {
      const post = await this.$store.dispatch(
        'posts/updateNoImageNode',
        newPost
      )
      if (!post.err) {
        // const post = await this.$store.dispatch('posts/update', {
        //   postPayload: this.post,
        //   imagePayload: this.image,
        // })
        await this.$store.dispatch('shared/setSnackbar', {
          text: `You have successfully edited your post, ${post.title}.`,
        })
        await this.$router.push({
          name: 'admin-posts-id',
          params: { id: post.id },
        })
      } else {
        await this.$store.dispatch('shared/setSnackbar', {
          color: 'error lighten-1',
          text: post.err,
        })
      }
    },
  },
}
</script>
