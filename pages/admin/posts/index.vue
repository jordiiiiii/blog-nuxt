<template>
  <v-container class="AdminPostList">
    <h1>Admin Blog List</h1>
    <v-btn text :to="{ name: 'admin-posts-new' }"> Add Post </v-btn>

    <PostTable
      :posts="posts"
      :headers="headers"
      :items-per-page="20"
      :dense="true"
      :custom-click-action="showPost"
    />
    <!--    <div class="flex-table">-->
    <!--      <div>Title</div>-->
    <!--      <div>Snippet</div>-->
    <!--      <div>Actions</div>-->
    <!--    </div>-->
    <!--    <div v-for="post in posts" :key="post.id" class="flex-table">-->
    <!--      <div>{{ post.title | abbreviate }}</div>-->
    <!--      <div>{{ post.snippet | abbreviate }}</div>-->
    <!--      <div class="actions">-->
    <!--        <router-link :to="{ name: 'posts-id', params: { id: post.id } }">-->
    <!--          Read-->
    <!--        </router-link>-->
    <!--        <router-link :to="{ name: 'admin-posts-id', params: { id: post.id } }">-->
    <!--          Show-->
    <!--        </router-link>-->
    <!--        <router-link-->
    <!--          :to="{ name: 'admin-posts-id-edit', params: { id: post.id } }"-->
    <!--        >-->
    <!--          Edit-->
    <!--        </router-link>-->
    <!--        <v-btn x-small @click="deletePost(post)">Delete</v-btn>-->
    <!--      </div>-->
    <!--    </div>-->
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AdminPosts',
  // filters: {
  //   abbreviate(text) {
  //     if (text.length > 50) {
  //       if (text) {
  //         text = text.replace('<p>', '')
  //         return text.slice(0, 50) + '...'
  //       }
  //     }
  //     return text
  //   },
  // },
  head() {
    return {
      title: 'Admin posts',
    }
  },
  computed: {
    ...mapState({
      posts: (state) => state.posts.posts,
    }),
    headers() {
      return [
        { text: 'Title', value: 'title' },
        { text: 'Tags', value: 'tags', sortable: false },
        { text: 'Date', value: 'sortable_created_at' },
        { text: 'Actions', value: 'actions', sortable: false, width: '300px' },
      ]
    },
  },
  methods: {
    showPost(post) {
      this.$router.push({ name: 'admin-posts-id', params: { id: post.id } })
    },
    //   deletePost(post) {
    //     const response = confirm(`Are you sure you want to delete ${post.title}?`)
    //     if (response) {
    //       this.$store.dispatch('posts/delete', post)
    //       this.$store.dispatch('shared/setSnackbar', {
    //         text: 'You have successfully deleted the post.',
    //       })
    //     }
    //   },
    //   // async deletePost(post) {
    //   //   const response = confirm(`Are you sure you want to delete ${post.title}?`)
    //   //   if (response) {
    //   //     const dltPost = await this.$store.dispatch('posts/delete', post)
    //   //     if (!dltPost.err) {
    //   //       await this.$store.dispatch('shared/setSnackbar', {
    //   //         text: 'You have successfully deleted the post.',
    //   //       })
    //   //     } else {
    //   //       await this.$store.dispatch('shared/setSnackbar', {
    //   //         color: 'error lighten-1',
    //   //         text: dltPost.err,
    //   //       })
    //   //     }
    //   //   }
    //   // },
  },
}
</script>

<style lang="scss" scoped>
//.flex-table {
//  display: grid;
//  grid-template-columns: repeat(auto-fill, 33%);
//  padding: 10px;
//  border-bottom: 1px black solid;
//  &:nth-of-type(2n) {
//    background-color: #dedede;
//  }
//  .actions {
//    * {
//      margin-left: 8px;
//    }
//  }
//}
</style>
