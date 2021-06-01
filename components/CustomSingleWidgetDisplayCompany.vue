<template>
  <div class="d-flex flex-wrap justify-space-around py-16">
    <CustomSingleWidgetBtn
      v-for="(solution, index) in solutions"
      :key="index"
      :solution="solution"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CustomSingleWidgetDisplayCompany',
  computed: {
    ...mapState({
      solutions: (state) => state.staticWidgets.companyWidgets,
    }),
  },
}
</script>
