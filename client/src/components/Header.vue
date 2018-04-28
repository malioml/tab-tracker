<template>
    <v-toolbar fixed class="cyan" dark>
        <v-toolbar-title class="mr-4">
            <v-btn dark flat :to="{name: 'root'}">
                TabTracker
            </v-btn>
        </v-toolbar-title>

        <v-toolbar-items>
            <v-btn
                    flat dark :to="{name: 'songs'}">
                Browse
            </v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn
                    v-if="!$store.state.isUserLoggedIn"
                    flat dark :to="{name: 'login'}">
                Login
            </v-btn>
            <v-btn
                    v-if="!$store.state.isUserLoggedIn"
                    flat dark :to="{name: 'register'}">
                    Sign UP
            </v-btn>
            <v-btn
                    v-if="$store.state.isUserLoggedIn"
                    flat dark @click="logout">
                Log Out
            </v-btn>
        </v-toolbar-items>

    </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'songs'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
