'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const userEvents = require('./user/events')
// const filmEvents = require('./film/events')

$(() => {
  $('#sign-up-form').on('submit', userEvents.onSignUp)
  $('#sign-in-form').on('submit', userEvents.onSignIn)
  $('#change-password-form').on('submit', userEvents.onChangePassword)
  $('#sign-out-button').on('click', userEvents.onSignOut)
  // $('#add-film-form').on('submit', filmEvents.onAddFilm)
  // $('#modify-film-form').on('submit', filmEvents.onModifyFilm)
  // $('#get-all-films-button').on('click', filmEvents.onGetAllFilms)
  // $('#get-one-film-form').on('submit', filmEvents.onGetOneFilm)
  // $('#delete-film-form').on('submit', filmEvents.onDeleteFilm)
})
