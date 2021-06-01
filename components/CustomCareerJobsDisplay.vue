<template>
  <div class="pb-16">
    <div v-for="(job, index) in jobs" :key="index" class="flex-table">
      <div>{{ job.title }}</div>
      <div>{{ job.location }}</div>
      <div>{{ job.filter }}</div>
      <v-btn small>Details</v-btn>
    </div>
  </div>
</template>

<v-btn nuxt :to="{ name: titlesH3[2].nameLink }" outlined color="btnGreen">
{{ titlesH3[2].link }}
</v-btn>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CustomCareerJobsDisplay',
  computed: {
    ...mapState({
      jobs: (state) => state.staticCareers.jobCareers,
    }),
  },
}
</script>

<style lang="scss" scoped>
.flex-table {
  display: grid;
  grid-template-columns: repeat(auto-fill, 24%);
  padding: 10px;
  &:nth-of-type(2n) {
    background-color: #f7f7f7;
  }
  .actions {
    * {
      padding-right: 15px;
    }
  }
}
</style>
