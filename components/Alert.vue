<template>
  <v-alert
    border="left"
    dense
    dismissible
    outlined
    text
    type="error"
    :value="true"
    @input="onClose"
  >
    {{ text }}
  </v-alert>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  methods: {
    onClose() {
      this.$emit('dismissed')
    },
  },
}
</script>
