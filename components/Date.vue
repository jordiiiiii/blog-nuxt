<template>
  <span v-if="date">
    {{ date.getDate() }}/{{ date.getMonth() + 1 }}/{{ date.getFullYear() }}
  </span>
</template>

<script>
export default {
  name: 'Date',
  props: {
    date: Date,
  },
}
</script>
