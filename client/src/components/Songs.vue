<template>
    <v-layout row wrap>
        <v-flex xs6 offset-xs3>
            <panel>
                <div slot="hello">
                    <h3>YO YO YO</h3>
                    <p>
                        Hello there I am a paragraph tag
                    </p>
                </div>

                <div slot="bye">
                    <h3>bye bye bye</h3>
                    <p>
                        Bye
                    </p>
                </div>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
