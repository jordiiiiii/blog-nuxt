<template>
  <v-container>
    <h1>Register</h1>
    <UserAuthForm
      :submit-form="registerUser"
      :btn-text="'Register'"
      :change-route="changeRoute"
      :has-name="true"
    />
  </v-container>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      changeRoute: {
        optRoute: 'login',
        msgOptRoute: 'Already have an account? Login.',
      },
    }
  },
  methods: {
    async registerUser(registrationInfo) {
      const user = await this.$store.dispatch('users/registerUser', {
        userName: registrationInfo.userName,
        email: registrationInfo.email,
        password: registrationInfo.password,
      })

      if (!user.error) {
        this.$auth.loginWith('local', {
          data: registrationInfo,
        })
        await this.$store.dispatch('shared/setSnackbar', {
          text: 'Welcome to our Group ' + user.userName,
        })
        await this.$router.push({ name: 'posts' })
      }
    },
  },
}
</script>
