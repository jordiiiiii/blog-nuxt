<template>
  <div>
    <!--hero-->
    <div class="hero">
      <!--      <video playsinline autoplay muted loop>-->
      <video preload="auto" autoplay muted loop>
        <!-- <source src="mp4/Tot.webm" type="video/webm" /> -->
        <source :src="require('@/assets/media/video1.mp4')" type="video/mp4" />
      </video>

      <v-container>
        <CustomHeroSlots>
          <template #subtitle>
            {{ heroH1.subtitle }}
          </template>
          <template #title>
            {{ heroH1.title }}
          </template>
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
      <template #title> {{ titlesH3[0].title }} </template>
      <template #body> {{ titlesH3[0].body }} </template>
    </CustomTitleSlots>

    <v-container>
      <iframe
        class="video"
        width="100%"
        height="628px"
        src="https://www.youtube.com/embed/s4BibernJxU"
        frameborder="0"
        allow="autoplay"
        allowfullscreen=""
      ></iframe>
    </v-container>

    <span id="solutions" />
    <v-container>
      <!--solutions-->
      <CustomSingleWidgetDisplaySolutions />
    </v-container>

    <div class="hero3">
      <v-container>
        <CustomHeroSubSlots>
          <template #title> {{ subHeroH2[0].title }} </template>
          <template #body> {{ subHeroH2[0].body }} </template>
        </CustomHeroSubSlots>
      </v-container>
    </div>

    <v-container>
      <v-row align="start">
        <CustomHeroSubSlots>
          <template #title> {{ subHeroH2[1].title }} </template>
          <template #body> {{ subHeroH2[1].body }} </template>
        </CustomHeroSubSlots>

        <v-col cols="12" sm="12" md="7" lg="8" class="py-16">
          <video class="video2" preload="auto" autoplay muted loop>
            <source
              :src="require('~/assets/media/video2.mp4')"
              type="video/mp4"
            />
          </video>
        </v-col>
      </v-row>
    </v-container>

    <span id="sheet" />
    <!--datasheet-->
    <v-row align="center" class="mb-16">
      <v-col class="text-center text-sm-right">
        <v-avatar size="400" tile>
          <v-img
            :src="require('@/assets/images/product-datasheet-thum.jpg')"
          ></v-img>
        </v-avatar>
      </v-col>
      <v-col>
        <CustomHeroSubSlots>
          <template #title> {{ subHeroH2[2].title }} </template>
          <template #body> {{ subHeroH2[2].body }} </template>
          <template #links>
            <v-btn
              nuxt
              :to="{ name: subHeroH2[2].nameLink }"
              outlined
              color="btnGrey"
            >
              {{ subHeroH2[2].link }}
            </v-btn>
          </template>
        </CustomHeroSubSlots>
      </v-col>
    </v-row>

    <div class="bkdDark">
      <CustomTitleSlots>
        <template #title> {{ titlesH3[2].title }} </template>
        <template #links>
          <v-btn
            nuxt
            :to="{ name: titlesH3[2].nameLink }"
            outlined
            color="btnGreen"
          >
            {{ titlesH3[2].link }}
          </v-btn>
        </template>
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
      title: 'Product',
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
      heroH1: (state) => state.staticHeroes.heroesH1[1],
      subHeroH2: (state) => state.staticHeroes.subHeroesH2Product,
      titlesH3: (state) => state.staticHeroes.titlesH3Product,
    }),
  },
}
</script>

<style scoped>
.hero video {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -99;
  object-fit: cover;
}
.video2 {
  width: 100%;
  height: auto;
}
.bkdDark {
  background-color: rgba(0, 38, 66, 0.82);
}
.hero3 {
  /* Sizing */
  width: 100vw;
  height: 50vh;
  /* Background styles */
  background-image: url(~/assets/images/cover-3.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
