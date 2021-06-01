<template>
  <v-container class="userAuthForm">
    <v-row v-if="error">
      <v-col cols="12" md="6" sm="8" class="offset-sm-2 offset-md-3">
        <Alert :text="error" @dismissed="onDismissed"></Alert>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" sm="8" class="offset-sm-2 offset-md-3">
        <v-card>
          <v-card-text>
            <v-container>
              <v-form v-model="valid">
                <v-text-field
                  v-if="hasName"
                  v-model="userInfo.userName"
                  :rules="[
                    required('Username'),
                    minLength('Password', 2),
                    maxLength('Password', 20),
                  ]"
                  label="Username"
                  type="text"
                />
                <v-text-field
                  v-model="userInfo.email"
                  :rules="[required('Email'), isEmail()]"
                  label="Email"
                  type="email"
                />
                <v-text-field
                  v-model="userInfo.password"
                  :append-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPwd ? 'text' : 'password'"
                  :rules="[
                    required('Password'),
                    minLength('Password', 6),
                    maxLength('Password', 56),
                  ]"
                  label="Password"
                  @click:append="showPwd = !showPwd"
                />
                <v-btn :disabled="!valid" @click="submitForm(userInfo)">{{
                  btnText
                }}</v-btn>
              </v-form>
            </v-container>
            <router-link :to="{ name: changeRoute.optRoute }">
              {{ changeRoute.msgOptRoute }}
            </router-link>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import validations from '~/utils/validations'

export default {
  name: 'UserAuthForm',
  props: {
    submitForm: {
      type: Function,
      required: true,
    },
    btnText: {
      type: String,
      required: true,
    },
    hasName: {
      type: Boolean,
    },
    changeRoute: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showPwd: false,
      userInfo: {
        userName: 'Jordi',
        email: 'a@a.com',
        password: '123456',
      },
      valid: false,
      ...validations,
    }
  },
  computed: {
    error() {
      return this.$store.getters['shared/error']
    },
  },
  methods: {
    onDismissed() {
      this.$store.dispatch('shared/clearError')
    },
  },
}
</script>
