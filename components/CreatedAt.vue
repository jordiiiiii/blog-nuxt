<template>
  <div>
    <em>
      <span v-if="publishedAt">
        Published on <Date :date="publishedAt" />
      </span>
    </em>
  </div>
</template>

<script>
export default {
  name: 'CreatedAt',
  props: {
    post: {
      type: Object,
      default() {
        return {}
      },
      required: true,
    },
  },
  computed: {
    publishedAt() {
      return this.post.createdAt
    },
  },
}
</script>
