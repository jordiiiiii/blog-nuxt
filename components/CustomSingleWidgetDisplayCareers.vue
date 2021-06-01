<template>
  <!--  <div class="d-flex flex-wrap justify-space-around">-->
  <v-row class="d-sm-flex flex-wrap no-gutters">
    <CustomSingleWidgetLeftIcon
      v-for="(solution, index) in solutions"
      :key="index"
      :solution="solution"
    />
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CustomSingleWidgetDisplayCareers',
  computed: {
    ...mapState({
      solutions: (state) => state.staticWidgets.careerWidgets,
    }),
  },
}
</script>
