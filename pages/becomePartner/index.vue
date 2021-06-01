<template>
  <v-container>
    <CustomHeroSlots>
      <template #title>
        {{ heroH1.title }}
      </template>
      <template #body> {{ heroH1.body }} </template>
    </CustomHeroSlots>
    <UserContactForm />
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Index',
  head() {
    return {
      title: 'Become A Partner',
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
      heroH1: (state) => state.staticHeroes.heroesH1[8],
    }),
  },
}
</script>
