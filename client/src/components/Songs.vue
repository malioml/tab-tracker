<template>
    <v-layout row wrap>
        <v-flex xs6 offset-xs3>
            <panel title="Songs">
                <v-btn :to="{name: 'songs-create'}" slot="action" class="cyan accent-2" light medium absolute right middle fab>
                    <v-icon>add</v-icon>
                </v-btn>
                <div class="song" v-for="song in songs" :key="song.id">
                    <v-layout>
                        <v-flex xs6>
                            <div class="song-title">
                                {{song.title}}
                            </div>
                            <div class="song-artist">
                                {{song.artist}}
                            </div>
                            <div class="song-genre">
                                {{song.genre}}
                            </div>

                            <v-btn dark class="cyan" :to="{name: 'song', params: {
                                songId : song.id
                            }}">
                                View
                            </v-btn>
                        </v-flex>

                        <v-flex xs6>
                            <img class="album-image" :src="song.albumImage" alt="song album">
                        </v-flex>
                    </v-layout>
                </div>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
import SongService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    // to a request to the backend for all the songs
    this.songs = (await SongService.index()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .song {
        padding: 20px;
        height: 330px;
        overflow: hidden;
    }
    .album-image{
        width: 70%;
        margin: 0 auto;
    }

    .song-title {
        font-size:30px;
    }

    .song-artist {
        font-size:24px;
    }

    .song-genre {
        font-size:24px;
    }

</style>
