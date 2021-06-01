<template>
  <!--  <v-app class="container">-->
  <v-app>
    <!--    <TheHeader />-->
    <!--    <TheFuster />-->
    <Fuster />
    <v-main>
      <nuxt />
    </v-main>
    <v-snackbar
      v-for="(snackbar, index) in snackbars.filter((s) => s.showing)"
      :key="index"
      :value="snackbar.showing"
      :timeout="snackbar.timeout"
      :color="snackbar.color"
      :style="`bottom: ${index * 60 + 8}px`"
      @input="removeSnackbar(snackbar)"
    >
      {{ snackbar.text }}
      <template #action="{ attrs }">
        <v-btn text icon v-bind="attrs" @click="removeSnackbar(snackbar)">
          <v-icon dark> mdi-close-circle </v-icon>
        </v-btn>
      </template>
    </v-snackbar>
    <TheFooter />
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Default',
  middleware: 'load-posts-and-tags',
  head() {
    return {
      titleTemplate: '%s - Jordi GN/Grail CyberTech',
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
      snackbars: (state) => state.shared.snackbars,
      seoContent: (state) => state.staticSeo.meta[0],
    }),
  },
  methods: {
    removeSnackbar(snackbar) {
      this.$store.dispatch('shared/closeSnackbar', snackbar)
    },
  },
}
</script>
