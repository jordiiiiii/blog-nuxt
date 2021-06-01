<template>
  <div class="bkdColor">
    <div class="heroSheet">
      <v-container>
        <CustomHeroSlots>
          <template #title>
            {{ heroH1.title }}
          </template>
        </CustomHeroSlots>
        <UserContactForm />
      </v-container>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Index',
  head() {
    return {
      title: 'Datasheet',
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
      seoContent: (state) => state.staticSeo.meta[1],
      heroH1: (state) => state.staticHeroes.heroesH1[9],
    }),
  },
}
</script>

<style scoped>
.bkdColor {
  background-color: #020518;
}
.heroSheet {
  background-image: url(~/assets/images/cover-8-sheet.png);
  background-position: right;
}
</style>
