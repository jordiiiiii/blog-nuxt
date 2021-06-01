<template>
  <div class="container pa-0">
    <img
      :src="require(`@/assets/images/${career.image}`)"
      style="width: 100%"
      alt=""
    />
    <!--    <v-img-->
    <!--      :src="require(`@/assets/images/${career.image}`)"-->
    <!--      style="width: 100%"-->
    <!--    ></v-img>-->
    <div class="centered">
      <h2 class="text-h6 text-sm-h5 font-weight-light text-capitalize ma-0">
        {{ career.title }}
      </h2>
      <p class="body-2 ma-0">
        {{ career.body }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomCareer',
  props: {
    career: {
      type: Object,
      required: true,
    },
  },
}
</script>
<!--<v-img :src="require(`@/assets/svg/${solution.image}`)"></v-img>-->

<style scoped>
.container {
  position: relative;
  text-align: center;
  color: white;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
