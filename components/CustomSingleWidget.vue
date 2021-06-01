<template>
  <div class="singleWidget">
    <img
      class="svg-icon"
      :src="require(`@/assets/svg/${solution.image}`)"
      alt=""
    />
    <h3 class="text-h6 text-sm-h5 font-weight-light text-capitalize my-2">
      {{ solution.title }}
    </h3>
    <p class="body-2">
      {{ solution.snippet }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'CustomSingleWidget',
  props: {
    solution: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.singleWidget {
  text-align: center;
  min-width: 200px;
  max-width: 250px;
  min-height: 250px;
  max-height: 350px;
}
.svg-icon {
  height: 48px;
}
</style>
