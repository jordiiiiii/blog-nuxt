<template>
  <div>
    <!--hero-->
    <div class="hero">
      <v-container>
        <CustomHeroSlots>
          <template #subtitle> {{ heroH1.subtitle }} </template>
          <template #title> {{ heroH1.title }} </template>
          <template #body> {{ heroH1.body }} </template>
          <template #links>
            <v-btn
              nuxt
              :to="{ name: heroH1.nameLink }"
              outlined
              color="btnGreen"
            >
              {{ heroH1.link }}
            </v-btn>
          </template>
        </CustomHeroSlots>
      </v-container>
    </div>

    <CustomTitleSlots>
      <template #title> {{ titleBodyH3[0].title }} </template>
    </CustomTitleSlots>

    <v-container>
      <CustomSingleWidgetDisplayCareers />
    </v-container>

    <CustomTitleSlots>
      <template #title> {{ titleBodyH3[1].title }} </template>
    </CustomTitleSlots>

    <CustomCareersDisplay />

    <CustomTitleSlots>
      <template #title> {{ titleBodyH3[2].title }} </template>
    </CustomTitleSlots>

    <v-container>
      <CustomCareerJobsDisplay />
    </v-container>

    <div class="bkdDark">
      <CustomTitleSlots>
        <template #title> {{ titleBodyH3[3].title }} </template>
        <template #body> {{ titleBodyH3[3].body }} </template>
      </CustomTitleSlots>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Index',
  head() {
    return {
      title: 'Career',
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
      seoContent: (state) => state.staticSeo.meta[3],
      heroH1: (state) => state.staticHeroes.heroesH1[3],
      titleBodyH3: (state) => state.staticHeroes.titleBodyH3Careers,
    }),
  },
}
</script>

<style scoped>
.hero {
  background-image: url(~/assets/images/cover-4-careere-desktop.jpg);
}
.bkdDark {
  background-color: rgba(0, 38, 66, 0.82);
}
</style>
