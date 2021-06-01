<template>
  <div class="bkdColor">
    <div class="hero">
      <v-container>
        <CustomHeroSlots>
          <template #title> {{ heroH1.title }} </template>
          <template #body> {{ heroH1.body }} </template>
        </CustomHeroSlots>
        <UserContactForm />
      </v-container>
    </div>
    <div class="divHeight"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Index',
  head() {
    return {
      title: 'Contact Us',
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
      heroH1: (state) => state.staticHeroes.heroesH1[6],
      seoContent: (state) => state.staticSeo.meta[6],
    }),
  },
}
</script>

<style scoped>
.bkdColor {
  background-color: #020518;
}
.divHeight {
  height: 100px;
}
.hero {
  background-image: url(~/assets/images/cover-6-contact.jpg);
}
</style>
