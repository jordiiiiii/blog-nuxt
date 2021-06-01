<template>
  <div>
    <!--hero-->
    <div class="hero">
      <v-container>
        <CustomHeroSlots>
          <template #title> {{ heroH1.title }} </template>
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
    <!--partners-->
    <CustomTitleSlots>
      <template #title> {{ titlesH3[0].title }} </template>
    </CustomTitleSlots>
    <v-container class="mb-16">
      <CustomPartnersDisplay class="mr-sm-16" />
    </v-container>

    <!--parallax-->
    <v-parallax
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-row align="center" justify="center">
        <CustomTitleSlots>
          <template #title> {{ titlesH3[1].title }} </template>
          <template #links>
            <v-btn
              nuxt
              :to="{ name: titlesH3[1].nameLink }"
              outlined
              color="btnGrey"
            >
              {{ titlesH3[1].link }}
            </v-btn>
          </template>
        </CustomTitleSlots>
      </v-row>
    </v-parallax>
    <!--solutions-->
    <v-container>
      <CustomTitleSlots>
        <template #title> {{ titlesH3[2].title }} </template>
      </CustomTitleSlots>
      <CustomGrailCardsDisplay />
    </v-container>
    <!--graphics-->
    <Circles />
    <!--subHero-->
    <v-container>
      <v-row>
        <CustomHeroSubSlots>
          <template #title> {{ subHeroH2.title }} </template>
          <template #body> {{ subHeroH2.body }} </template>
        </CustomHeroSubSlots>
        <CustomExpansionPanel />
      </v-row>
    </v-container>
    <!--title-->
    <CustomTitleSlots>
      <template #title> {{ titlesH3[3].title }} </template>
      <template #links>
        <v-btn
          nuxt
          :to="{ name: titlesH3[3].nameLink }"
          outlined
          color="btnGrey"
        >
          {{ titlesH3[3].link }}
        </v-btn>
      </template>
    </CustomTitleSlots>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Index',
  head() {
    return {
      title: 'Home',
    }
  },
  computed: {
    ...mapState({
      heroH1: (state) => state.staticHeroes.heroesH1[0],
      subHeroH2: (state) => state.staticHeroes.subHeroesH2Home[0],
      titlesH3: (state) => state.staticHeroes.titlesH3Home,
    }),
  },
}
</script>

<style scoped>
.hero {
  background-image: url(~/assets/images/cover-1.jpg);
}
</style>
