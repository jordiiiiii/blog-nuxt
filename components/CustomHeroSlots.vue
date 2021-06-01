<template>
  <div class="heroTitle">
    <v-row>
      <v-col cols="12" sm="6" md="5" class="text-center text-sm-left">
        <h4 class="white--text text-h6 text-uppercase">
          <slot name="subtitle"></slot>
        </h4>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6" md="5" class="text-center text-sm-left">
        <h1 class="white--text text-h4 text-sm-h3 text-capitalize ma-0">
          <slot name="title"></slot>
        </h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6" md="5" class="text-center text-sm-left">
        <p class="white--text body-2 ma-0">
          <slot name="body"></slot>
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="5"
        class="white--text text-center text-sm-left text-uppercase"
      >
        <slot name="links"></slot>
      </v-col>
    </v-row>
  </div>
  <!--    <v-col cols="12" sm="6" md="5" class="text-center text-sm-left">-->
  <!--      <v-row>-->
  <!--        <h1 class="text-h6 text-uppercase font-weight-light mx-auto mx-sm-0">-->
  <!--          <slot name="subtitle"></slot>-->
  <!--        </h1>-->
  <!--      </v-row>-->
  <!--    </v-col>-->
</template>

<script>
export default {
  name: 'CustomHeroSlots',
}
</script>

<style scoped>
.heroTitle {
  margin-top: var(--heroH);
}
</style>
