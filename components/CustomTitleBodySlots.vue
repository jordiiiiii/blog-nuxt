<template>
  <!--  <v-card width="340px">-->
  <v-card width="340px" elevation="1">
    <v-row justify="center">
      <v-col cols="9" class="text-center text-sm-left">
        <h2 class="text-h6 text-sm-h5 font-weight-light text-capitalize ma-0">
          <slot name="title"></slot>
        </h2>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="9" class="text-center text-sm-left">
        <p class="body-2 ma-0">
          <slot name="body"></slot>
        </p>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'CustomTitleSubSlots',
}
</script>
