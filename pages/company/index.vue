<template>
  <div>
    <v-container>
      <CustomHeroSlots>
        <template #title> {{ heroH1.title }} </template>
        <template #body> {{ heroH1.body }} </template>
      </CustomHeroSlots>

      <CustomHeroSubSlots>
        <template #title> {{ subHeroH2[0].title }} </template>
        <template #body> {{ subHeroH2[0].body }} </template>
      </CustomHeroSubSlots>

      <CustomHeroSubSlots>
        <template #title> {{ subHeroH2[1].title }} </template>
        <template #body> {{ subHeroH2[1].body }} </template>
      </CustomHeroSubSlots>

      <CustomHeroSubSlots>
        <template #title> {{ subHeroH2[2].title }} </template>
        <template #body> {{ subHeroH2[2].body }} </template>
      </CustomHeroSubSlots>
    </v-container>

    <div class="hero4">
      <CustomSingleWidgetDisplayCompany />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Index',
  head() {
    return {
      title: 'Company',
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
      seoContent: (state) => state.staticSeo.meta[2],
      heroH1: (state) => state.staticHeroes.heroesH1[2],
      subHeroH2: (state) => state.staticHeroes.subHeroesH2Company,
    }),
  },
}
</script>

<style scoped>
.hero4 {
  /* Sizing */
  width: 100vw;
  height: 60vh;
  /* Background styles */
  background-image: url(~/assets/images/company-page-bottom-v3.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
