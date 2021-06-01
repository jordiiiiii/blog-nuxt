<template>
  <div>
    <!--hero-->
    <div class="hero">
      <v-container>
        <CustomHeroSlotsLight>
          <template #subtitle> {{ heroH1.subtitle }} </template>
          <template #title> {{ heroH1.title }} </template>
          <template #body> {{ heroH1.body }} </template>
        </CustomHeroSlotsLight>
      </v-container>
    </div>

    <div class="bkdDark">
      <v-container>
        <CustomSingleWidgetDisplayPartners />
      </v-container>
    </div>

    <v-container>
      <CustomTitleSlots>
        <template #title> {{ titlesH3[1].title }} </template>
      </CustomTitleSlots>
    </v-container>

    <v-container class="mb-16">
      <CustomPartnersDisplay class="mr-sm-16" />
    </v-container>

    <div class="subImatge">
      <v-container>
        <CustomHeroSubSlots>
          <template #title> {{ subHeroH2.title }} </template>
          <template #body> {{ subHeroH2.body }} </template>
          <template #links>
            <v-btn
              nuxt
              :to="{ name: subHeroH2.nameLink }"
              outlined
              color="btnGrey"
            >
              {{ subHeroH2.link }}
            </v-btn>
          </template>
        </CustomHeroSubSlots>
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
      title: 'Partners',
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
      seoContent: (state) => state.staticSeo.meta[4],
      heroH1: (state) => state.staticHeroes.heroesH1[4],
      subHeroH2: (state) => state.staticHeroes.subHeroesH2Partners[0],
      titlesH3: (state) => state.staticHeroes.titlesH3Partners,
    }),
  },
}
</script>

<style scoped>
.hero {
  background-image: url(~/assets/images/cover-2.jpg);
}
.subImatge {
  background-image: url(~/assets/images/partner-sub2.png);
  background-position: right bottom;
}
.bkdDark {
  background-color: rgba(0, 38, 66, 0.82);
}
</style>
