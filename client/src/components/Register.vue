<template>
  <v-layout row wrap>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
          <form name="tab-tracker-form" autocomplete="off">
              <v-text-field label="Email" v-model="email"></v-text-field>
              <br>
              <v-text-field type="password" label="Password" v-model="password" autocomplete="new-password"></v-text-field>
              <br>
              <div class="error" v-html="error"></div>
              <v-btn class="cyan" dark @click="register">Register</v-btn>
          </form>
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
    async register () {
      try {
        const response = await AuthenticationServer.register({
          email: this.email,
          password: this.password
        })
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
