<template>
  <div>
    <CustomTitleSlots>
      <template #title> {{ titlesH3[0].title }} </template>
    </CustomTitleSlots>

    <div class="d-flex flex-wrap justify-space-around">
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
  name: 'CustomSingleWidgetDisplayPartners',
  computed: {
    ...mapState({
      titlesH3: (state) => state.staticHeroes.titlesH3Partners,
      solutions: (state) => state.staticWidgets.partnerWidgets,
    }),
  },
}
</script>
