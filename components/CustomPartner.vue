<template>
  <v-card
    class="customPartner ma-6"
    height="112"
    width="176"
    elevation="5"
    justify="center"
  >
    <v-img
      class="svg-icon"
      :src="require(`@/assets/svg/${partner.image}`)"
      alt=""
    />
  </v-card>
</template>

<script>
export default {
  name: 'CustomPartner',
  props: {
    partner: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.svg-icon {
  width: 176px;
}
</style>
