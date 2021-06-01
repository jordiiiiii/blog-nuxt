<template>
  <div class="singleWidget my-6">
    <img
      class="svg-icon"
      :src="require(`@/assets/svg/${solution.image}`)"
      alt=""
    />
    <h3
      class="
        text-h6
        white--text
        text-sm-h5
        font-weight-light
        text-capitalize
        my-2
      "
    >
      {{ solution.title }}
    </h3>
    <p class="body-2 pb-4 white--text">
      {{ solution.snippet }}
    </p>
    <v-btn nuxt :to="{ name: solution.nameLink }" outlined color="btnGreen">
      {{ solution.link }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'CustomSingleWidgetBtn',
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
  color: white;
}
.v-application a {
  color: #3b8070;
}
.v-application a:hover {
  color: white;
}
</style>
