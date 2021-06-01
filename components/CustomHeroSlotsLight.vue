<template>
  <div class="heroTitle">
    <v-row>
      <v-col cols="12" sm="6" md="5" class="text-center text-sm-left">
        <h4 class="text-h6 font-weight-light text-uppercase">
          <slot name="subtitle"></slot>
        </h4>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6" md="5" class="text-center text-sm-left">
        <h1 class="text-h4 text-sm-h3 font-weight-light text-capitalize ma-0">
          <slot name="title"></slot>
        </h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6" md="5" class="text-center text-sm-left">
        <p class="body-2 font-weight-light ma-0">
          <slot name="body"></slot>
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="5"
        class="text-center text-sm-left text-uppercase"
      >
        <slot name="links"></slot>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'CustomHeroSlotsLight',
}
</script>

<style scoped>
.heroTitle {
  margin-top: var(--heroH);
}
</style>
