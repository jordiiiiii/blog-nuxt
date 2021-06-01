<template>
  <v-row align="center">
    <v-col class="hidden-xs-only" cols="12" sm="4" md="2" offset-md="1">
      <CustomPartner :partner="partnerK" />
    </v-col>

    <v-col class="hidden-xs-only" cols="12" sm="4" md="2">
      <CustomPartner :partner="partnerP" />
      <CustomPartner :partner="partnerU" />
    </v-col>

    <v-col cols="12" sm="4" md="2" align="center">
      <CustomPartner :partner="partnerK" />
      <CustomPartner :partner="partnerP" />
      <CustomPartner :partner="partnerU" />
    </v-col>

    <v-col class="hidden-xs-only" cols="12" sm="4" md="2">
      <CustomPartner :partner="partnerK" />
      <CustomPartner :partner="partnerP" />
    </v-col>

    <v-col class="hidden-xs-only" cols="12" sm="4" md="2">
      <CustomPartner :partner="partnerU" />
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CustomPartnersDisplay',
  computed: {
    ...mapState({
      partnerK: (state) => state.staticPartners.partnerCards[0],
      partnerP: (state) => state.staticPartners.partnerCards[1],
      partnerU: (state) => state.staticPartners.partnerCards[2],
    }),
  },
}
</script>
