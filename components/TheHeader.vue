<template>
  <v-app-bar app color="pink">
    <v-toolbar-title>
      <router-link :to="{ name: 'posts' }" class="text-uppercase grey--text">
        <span class="font-weight-light">Grail</span>
        <span>CyberTech</span>
      </router-link>
      <router-link
        v-if="$auth.user && $auth.user.admin"
        :to="{ name: 'admin' }"
        class="text-uppercase grey--text"
      >
        <span class="font-weight-light">Admin</span>
      </router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn text :to="{ name: 'posts-extra' }">extra</v-btn>

    <div v-if="$auth.loggedIn">
      {{ $auth.user.userName }}
      <v-btn text @click="$auth.logout()">Logout</v-btn>
    </div>
    <div v-else>
      <v-btn text to="/login">Login</v-btn>
      <v-btn text to="/register">Register</v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>
