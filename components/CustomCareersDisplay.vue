<template>
  <v-row>
    <v-col v-for="(career, index) in careers" :key="index" cols="12" md="4">
      <CustomCareer :career="career" />
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CustomCareersDisplay',
  computed: {
    ...mapState({
      careers: (state) => state.staticCareers.titleImageCareers,
    }),
  },
}
</script>

<!--<v-row class="d-sm-flex flex-wrap no-gutters">-->
