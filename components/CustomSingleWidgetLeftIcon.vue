<template>
  <v-col cols="12" sm="6">
    <v-card class="mx-12 my-6" elevation="0">
      <div class="d-flex justify-space-between">
        <v-avatar class="ma-3" size="48" tile>
          <v-img :src="require(`@/assets/svg/${solution.image}`)"></v-img>
        </v-avatar>

        <!--        <img-->
        <!--          class="svg-icon"-->
        <!--          :src="require(`@/assets/svg/${solution.image}`)"-->
        <!--          alt=""-->
        <!--        />-->
        <div>
          <v-card-title
            class="text-h6 text-sm-h5 font-weight-light text-capitalize mb-2"
            v-text="solution.title"
          ></v-card-title>

          <v-card-subtitle v-text="solution.snippet"></v-card-subtitle>
        </div>
      </div>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'CustomSingleWidgetLeft',
  props: {
    solution: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.svg-icon {
  height: 48px;
}
</style>
