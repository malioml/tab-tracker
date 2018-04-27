<template>
    <v-layout row wrap>
        <v-flex xs6 offset-xs3>
            <div class="white elevation-2">
                <v-toolbar flat dense class="cyan" dark>
                    <v-toolbar-title>{{title}}</v-toolbar-title>
                </v-toolbar>

                <div class="pl-4 pr-4 pt-2 pb-2">
                    <slot name="hello">
                        No slot content defined.
                    </slot>

                    <slot name="bye">
                        No slot content defined.
                    </slot>
                </div>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
  data () {
    return {
      title: 'hello world'
    }
  }
}
</script>

<style scoped>
</style>
