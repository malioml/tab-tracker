const {
  sequelize,
  Song,
  User,
  Bookmark,
  History
} = require('../src/models')

const delay = require('delay')
const songs = require('./songs.json')
const users = require('./users.json')
const bookmarks = require('./bookmarks.json')
const histories = require('./histories.json')

sequelize.sync({force: true})
  .then(async () => {
    await Promise.all(
      users.map(user => {
        User.create(user)
      })
    )

    await Promise.all(
      songs.map(song => {
        Song.create(song)
      })
    )

    //todo fix this hack
    await delay(1000)

    await Promise.all(
      bookmarks.map(bookmark => {
        Bookmark.create(bookmark)
      })
    )

    await Promise.all(
      histories.map(history => {
        History.create(history)
      })
    )
  })
