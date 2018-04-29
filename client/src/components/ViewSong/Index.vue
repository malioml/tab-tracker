<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs6>
              <song-metadata :song="song"></song-metadata>
          </v-flex>
          <v-flex xs6>
            <you-tube :youtubeId="song.youtubeId"></you-tube>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs6>
            <tab :song="song"></tab>
          </v-flex>
          <v-flex xs6>
            <lyrics :song="song"></lyrics>
          </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import {mapState} from 'vuex'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Tab from './Tab'
import SongService from '@/services/SongsService'
import SongHistoryService from '@/services/SongHistoryService'

export default {
  data () {
    return {
      song: {}
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  async mounted () {
    const songId = this.route.params.songId
    try {
      this.song = (await SongService.show(songId)).data
    } catch (err) {
      console.log(err)
    }

    if (this.isUserLoggedIn) {
      SongHistoryService.post({
        songId: songId
      })
    }
  },
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  }
}
</script>

<style scoped>
    textarea {
        width: 100%;
        font-family: monospace;
        border: none;
        height: 600px;
        border-style: none;
        border-color: transparent;
        overflow: auto;
        padding: 40px;
    }
</style>
