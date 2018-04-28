<template>
  <v-layout row wrap>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
        <v-text-field label="Email" v-model="email"></v-text-field>
        <br>
        <v-text-field type="password" label="Password" v-model="password"></v-text-field>
        <br>
        <div class="error" v-html="error"></div>
        <v-btn class="cyan" dark @click="login">Login</v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationServer from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationServer.login({
          email: this.email,
          password: this.password
        })
        this.error = ''
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: red;
  }
</style>
