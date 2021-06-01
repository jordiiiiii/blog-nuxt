<template>
  <v-row class="d-sm-flex flex-wrap no-gutters">
    <CustomGrailCards
      v-for="(solution, index) in solutions"
      :key="index"
      :solution="solution"
    />
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CustomGrailCardsDisplay',
  computed: {
    ...mapState({
      solutions: (state) => state.staticGrailWidgets.grailWidgets,
    }),
  },
}
</script>
