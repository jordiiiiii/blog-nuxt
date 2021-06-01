<template>
  <div class="py-16">
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h4 class="text-h6 text-uppercase">
          <slot name="subtitle"></slot>
        </h4>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h2 class="text-h5 text-sm-h4 text-capitalize ma-0">
          <slot name="title"></slot>
        </h2>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="6" class="text-center">
        <p class="body-2 ma-0">
          <slot name="body"></slot>
        </p>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" class="text-center text-uppercase">
        <slot name="links"></slot>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'CustomTitleSlots',
}
</script>

<style scoped>
/*.v-application a {*/
/*  color: #35495e;*/
/*}*/
/*.v-application a:hover {*/
/*  color: white;*/
/*}*/
</style>
