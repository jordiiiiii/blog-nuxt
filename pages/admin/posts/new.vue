<template>
  <v-container class="admin-posts-new">
    <!--    <v-row>-->
    <!--      <v-col md="6" cols="12" class="ma-2">-->
    <h1>Post Create Page</h1>
    <PostEditForm :post="post" :save="savePost" :btn="btnText" />
    <!--      </v-col>-->
    <!--    </v-row>-->
  </v-container>
</template>

<script>
export default {
  name: 'AdminPostsNew',
  data() {
    return {
      btnText: 'create',
      post: {
        creator: '609d8c02cf7bb100045fc594',
      },
    }
  },
  head() {
    return {
      title: 'Admin posts new',
    }
  },
  methods: {
    async savePost(newPost) {
      const post = await this.$store.dispatch(
        'posts/createNoImageNode',
        newPost
      )
      if (!post.err) {
        // const post = await this.$store.dispatch('posts/create', {
        //   postPayload: this.post,
        //   imagePayload: this.image,
        // })
        await this.$store.dispatch('shared/setSnackbar', {
          color: 'accent lighten-1',
          text: `You have successfully created a new post, now wait to be approved. ${post.title}`,
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
