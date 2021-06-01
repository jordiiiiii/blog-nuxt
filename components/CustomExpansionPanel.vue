<template>
  <v-col cols="12" sm="7" md="5" class="py-16">
    <v-expansion-panels flat focusable accordion>
      <v-expansion-panel v-for="(item, i) in tableExpansion" :key="i">
        <v-expansion-panel-header
          color="text-h6 text-sm-h5 font-weight-light text-uppercase blue--text"
        >
          {{ item.title }}
        </v-expansion-panel-header>
        <v-expansion-panel-content
          class="subtitle-1 font-weight-light text-uppercase"
        >
          {{ item.subtitle }}
        </v-expansion-panel-content>
        <v-expansion-panel-content class="body-2">
          {{ item.snippet }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-col>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CustomExpansionPanel',
  computed: {
    ...mapState({
      tableExpansion: (state) => state.staticTables.homeTable,
    }),
  },
}
</script>

<style scoped></style>
