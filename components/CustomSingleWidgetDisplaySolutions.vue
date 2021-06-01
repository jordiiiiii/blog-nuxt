<template>
  <div>
    <CustomTitleSlots>
      <template #title> {{ titlesH3[1].title }} </template>
      <template #body> {{ titlesH3[1].body }} </template>
    </CustomTitleSlots>

    <div class="d-flex flex-wrap justify-space-around mt-12">
      <CustomSingleWidget
        v-for="(solution, index) in solutions"
        :key="index"
        :solution="solution"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CustomSingleWidgetDisplaySolutions',
  computed: {
    ...mapState({
      titlesH3: (state) => state.staticHeroes.titlesH3Product,
      solutions: (state) => state.staticWidgets.solutionWidgets,
    }),
  },
}
</script>
