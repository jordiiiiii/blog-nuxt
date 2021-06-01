<template>
  <v-col cols="12" sm="6" md="4">
    <v-card
      class="mx-12 my-6 text-center"
      elevation="0"
      @click.stop="dialog = true"
    >
      <v-avatar class="ma-3" size="200" tile>
        <v-img :src="require(`@/assets/svg/${solution.icon}`)"></v-img>
      </v-avatar>

      <v-divider class="mx-4"></v-divider>
      <v-card-subtitle
        class="text-h6 font-weight-light text-center text-capitalize mb-2"
        v-text="solution.title"
      ></v-card-subtitle>
    </v-card>
    <v-dialog v-model="dialog" scrollable max-width="600">
      <v-card>
        <div class="d-flex flex-no-wrap">
          <v-avatar class="ma-3" size="152" tile>
            <v-img :src="require(`@/assets/svg/${solution.image}`)"></v-img>
          </v-avatar>
          <div>
            <v-card-title
              class="text-h5"
              v-text="solution.title"
            ></v-card-title>

            <v-card-subtitle>
              <div v-for="(concept, index) in solution.snippet" :key="index">
                {{ concept }}
              </div>
            </v-card-subtitle>
            <span
              class="
                subtitle-1
                grey--text
                font-weight-light
                text--lighten-1
                changePosition
              "
              >{{ solution.type }}</span
            >
          </div>
        </div>
      </v-card>
    </v-dialog>
  </v-col>
</template>

<script>
export default {
  name: 'CustomGrailCards',
  props: {
    solution: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
    }
  },
}
</script>

<style scoped>
.changePosition {
  position: absolute;
  bottom: 8px;
  right: 8px;
}
</style>
