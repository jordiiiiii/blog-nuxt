<template>
  <v-col cols="12" sm="6" md="5" lg="4" class="py-16">
    <v-row>
      <v-col cols="12" class="text-center text-sm-left">
        <h4 class="text-h6 font-weight-light text-uppercase">
          <slot name="subtitle"></slot>
        </h4>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="text-center text-sm-left">
        <h2 class="text-h5 text-sm-h4 font-weight-light text-capitalize ma-0">
          <slot name="title"></slot>
        </h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="text-center text-sm-left">
        <p class="body-2 ma-0">
          <slot name="body"></slot>
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        class="text-center text-sm-left text-uppercase"
      >
        <slot name="links"></slot>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: 'CustomHeroSubSlots',
}
</script>

<style scoped>
.v-application a {
  color: #3b8070;
}
.v-application a:hover {
  color: white;
}
</style>
