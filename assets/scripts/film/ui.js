'use strict'

const addFilmSuccess = function () {
  $('#display-films').html('')
  $('#display-message').html('Add successful!')
  $('#display-message').css('color', 'green')
  $('#add-film-form').trigger('reset')
}

const addFilmFailure = function () {
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
  $('#add-film-form').trigger('reset')
}

const getAllFilmsSuccess = function (data) {
  $('#display-message').html('')
  $('#display-films').html('')
  data.films.forEach(function (film) {
    const filmHtml = (`
        <h4>Title: ${film.title}</h4>
        <p>Director: ${film.director}</p>
        <p>Rating: ${film.rating}</p>
        <p>Watched On: ${film.watched}</p>
        <p>ID: ${film.id}</p>
        </ br>
      `)
    $('#display-films').append(filmHtml)
  })
}

const getAllFilmsFailure = function () {
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
}

const getOneFilmSuccess = function (data) {
  $('#display-message').html('')
  $('#display-films').html('')
  const film = data.film
  const filmHtml = (`
      <h4>Title: ${film.title}</h4>
      <p>Director: ${film.director}</p>
      <p>Rating: ${film.rating}</p>
      <p>Watched On: ${film.watched}</p>
      <p>ID: ${film.id}</p>
      </ br>
    `)
  $('#display-films').html(filmHtml)
  $('#get-one-film-form').trigger('reset')
}

const getOneFilmFailure = function () {
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
  $('#display-films').html('')
  $('#get-one-film-form').trigger('reset')
}

const modifyFilmSuccess = function (data) {
  $('#display-message').html('')
  $('#display-message').html('Update Successful!')
  $('#display-films').html('')
  $('#display-message').css('color', 'green')
  $('#modify-film-form').trigger('reset')
}

const modifyFilmFailure = function () {
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
  $('#modify-film-form').trigger('reset')
}

const deleteFilmSuccess = function () {
  $('#display-message').html('Deletion successful!')
  $('#display-films').html('')
  $('#display-message').css('color', 'green')
  $('#delete-film-form').trigger('reset')
}

const deleteFilmFailure = function () {
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
  $('#delete-film-form').trigger('reset')
}

module.exports = {
  addFilmSuccess,
  addFilmFailure,
  getAllFilmsSuccess,
  getAllFilmsFailure,
  getOneFilmSuccess,
  getOneFilmFailure,
  modifyFilmSuccess,
  modifyFilmFailure,
  deleteFilmSuccess,
  deleteFilmFailure
}
