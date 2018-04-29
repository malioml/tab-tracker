<template>
    <v-layout row wrap>
        <v-flex xs6 v-if="isUserLoggedIn">
            <songs-bookmarks></songs-bookmarks>
            <recently-viewed-songs></recently-viewed-songs>
        </v-flex>
        <v-flex :class="{
            xs12: !isUserLoggedIn,
            xs6: isUserLoggedIn
        }">
            <songs-search-panel></songs-search-panel>
            <songs-panel class="mt-2"></songs-panel>
        </v-flex>
    </v-layout>
</template>

<script>
import {mapState} from 'vuex'
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongsBookmarks from './SongsBookmarks'
import RecentlyViewedSongs from './RecentlyViewedSongs'
import SongService from '@/services/SongsService'

export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    RecentlyViewedSongs
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
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
