<template>
  <panel title="Song Metadata">
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
        <v-btn dark class="cyan" :to="{name:'song-edit', params: {songId:song.id}}">
          Edit Song
        </v-btn>
        <v-btn
          v-if="$store.state.isUserLoggedIn && !bookmark"
          dark class="cyan" @click="setAsBookmark">
          Set As Bookmark
        </v-btn>
        <v-btn
          v-if="$store.state.isUserLoggedIn && bookmark"
          dark class="cyan" @click="unsetAsBookmark">
          Unset Bookmark
        </v-btn>
      </v-flex>

      <v-flex xs6 class="ml-2">
        <img class="album-image" :src="song.albumImage" alt="song album">
        <br>
        {{song.album}}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  props: [
    'song'
  ],
  data () {
    return {
      bookmark: false
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  watch: {
    async song () {
      if (!this.isUserLoggedIn) {
        return
      }
      try {
        this.bookmark = (await BookmarksService.index({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })).data
      } catch (err) {
        console.log(err)
      }
    }
  },
  methods: {
    async setAsBookmark () {
      try {
        this.bookmark = (await BookmarksService.post({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async unsetAsBookmark () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
  }
}
</script>
<style scoped>
  .song {
    padding: 20px;
    height: 330px;
    overflow: hidden;
  }

  .album-image {
    width: 70%;
    margin: 0 auto;
  }

  .song-title {
    font-size: 30px;
  }

  .song-artist {
    font-size: 24px;
  }

  .song-genre {
    font-size: 24px;
  }
</style>
