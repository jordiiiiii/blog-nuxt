<template>
  <v-container>
    <v-tabs>
      <v-tab
        v-for="item in items"
        :key="item.title"
        text
        :to="item.route"
        class="grey--text text--darken-1"
      >
        {{ item.title }}
      </v-tab>
    </v-tabs>
    <nuxt-child />
    <!--    <router-view />-->
  </v-container>
</template>

<script>
export default {
  name: 'Admin',
  middleware: 'auth-admin',
  head() {
    return {
      title: 'Admin',
    }
  },
  computed: {
    items() {
      return [
        {
          title: 'Posts',
          icon: 'mdi-view-dashboard',
          route: { name: 'admin-posts' },
        },
        {
          title: 'Tags',
          icon: 'mdi-bank-outline',
          route: { name: 'admin-tags' },
        },
        {
          title: 'Users',
          icon: 'mdi-bank-outline',
          route: { name: 'admin-users' },
        },
      ]
    },
  },
}
</script>
