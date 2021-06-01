<template>
  <v-container>
    <h1>Login</h1>
    <UserAuthForm
      :submit-form="loginUser"
      :btn-text="'Login'"
      :change-route="changeRoute"
    />
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      changeRoute: {
        optRoute: 'register',
        msgOptRoute: "Don't have an account? Register.",
      },
    }
  },
  methods: {
    async loginUser(loginInfo) {
      try {
        await this.$auth.loginWith('local', {
          data: loginInfo,
        })
        await this.$store.dispatch('shared/setSnackbar', {
          text: `Thanks for signing in, ${this.$auth.user.userName}`,
        })
        if (this.$auth.user.admin) {
          await this.$router.push({ name: 'admin-posts' })
        } else {
          await this.$router.push({ name: 'posts' })
        }
      } catch (e) {
        this.handlerErrors(e)
      }
    },
    handlerErrors(err) {
      let error = err.response.data.errors
      error = error.email ? error.email : error.password
      this.$store.commit('shared/SET_ERROR', error)
    },
  },
}
</script>
