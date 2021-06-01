<template>
  <div>
    <!--hero-->
    <div class="hero">
      <v-container>
        <CustomHeroSlots>
          <template #title> {{ heroH1.title }} </template>
          <template #body> {{ heroH1.body }} </template>
        </CustomHeroSlots>
      </v-container>
    </div>

    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <div class="d-flex flex-wrap">
          <div v-for="post in posts" :key="post.title">
            <PostListPost :post="post" :tags="tags"></PostListPost>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Posts',
  head() {
    return {
      title: 'Posts',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.seoContent.content,
        },
      ],
    }
  },
  computed: {
    ...mapState({
      tags: (state) => state.tags.tags,
      posts: (state) => state.posts.posts,
      heroH1: (state) => state.staticHeroes.heroesH1[5],
      seoContent: (state) => state.staticSeo.meta[5],
    }),
  },
}
</script>

<style scoped>
.hero {
  background-image: url(~/assets/images/blog.webp);
}
</style>
