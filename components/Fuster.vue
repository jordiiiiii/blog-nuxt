<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      dark
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      elevate-on-scroll
      height="64px"
      class="px-lg-6"
      dark
    >
      <v-toolbar-title>
        <NuxtLink :to="{ name: 'index' }" class="text-uppercase grey--text">
          <span class="font-weight-light">{{ title }}</span>
        </NuxtLink>
      </v-toolbar-title>
      <router-link
        v-if="$auth.user && $auth.user.admin"
        :to="{ name: 'admin' }"
        class="text-uppercase grey--text"
      >
        <span class="font-weight-light">Admin</span>
      </router-link>

      <v-spacer />

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="item in items"
          :key="item.title"
          text
          class="grey--text text--darken-1"
          :to="item.to"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <div v-if="$auth.loggedIn">
        <v-btn text :to="{ name: 'posts-extra' }">extra</v-btn>
        <v-btn text @click="$auth.logout()">Logout</v-btn>
      </div>
      <div v-else>
        <v-btn text to="/login">Login</v-btn>
        <v-btn text to="/register">Register</v-btn>
      </div>

      <v-btn
        icon
        class="hidden-md-and-up"
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'Fuster',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-chart-bubble',
          title: 'Product',
          to: { name: 'product' },
        },
        {
          icon: 'mdi-apps',
          title: 'Company',
          to: { name: 'company' },
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Partners',
          to: { name: 'partners' },
        },
        {
          icon: 'mdi-apps',
          title: 'Blog',
          to: { name: 'posts' },
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Contact Us',
          to: { name: 'contactUs' },
        },
      ],
      miniVariant: false,
      rightDrawer: false,
      title: 'Grail CyberTech',
    }
  },
}
</script>

<style scoped></style>
