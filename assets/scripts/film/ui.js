'use strict'

const addFilmSuccess = function (data) {
  $('#display-films').html('')
  $('#display-message').html('Add successful!')
  $('#display-message').css('color', 'green')
  const film = data.film
  const filmHtml = (`
      <p>Title: ${film.title}</p>
      <h4>Director: ${film.director}</h4>
      <h4>Rating: ${film.rating}</h4>
      <h4>Watched On: ${film.watched}</h4>
      <h4>ID: ${film.id}</h4>
      </ br>
    `)
  $('#display-films').html(filmHtml)
  $('#add-film-form').trigger('reset')
}

const addFilmFailure = function () {
  $('#display-films').html('')
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
  $('#add-film-form').trigger('reset')
}

const getAllFilmsSuccess = function (data) {
  $('#display-message').html('')
  $('#display-films').html('')
  data.films.forEach(function (film) {
    const filmHtml = (`
        <p>Title: ${film.title}</p>
        <h4>Director: ${film.director}</h4>
        <h4>Rating: ${film.rating}</h4>
        <h4>Watched On: ${film.watched}</h4>
        <h4>ID: ${film.id}</h4>
        </ br>
      `)
    $('#display-films').append(filmHtml)
  })
}

const getAllFilmsFailure = function () {
  $('#display-films').html('')
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
}

const getOneFilmSuccess = function (data) {
  $('#display-message').html('')
  $('#display-films').html('')
  const film = data.film
  const filmHtml = (`
      <p>Title: ${film.title}</p>
      <h4>Director: ${film.director}</h4>
      <h4>Rating: ${film.rating}</h4>
      <h4>Watched On: ${film.watched}</h4>
      <h4>ID: ${film.id}</h4>
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
  $('#display-films').html('')
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
  $('#modify-film-form').trigger('reset')
}

const deleteFilmSuccess = function () {
  $('#display-films').html('')
  $('#display-message').html('Deletion successful!')
  $('#display-message').css('color', 'green')
  $('#delete-film-form').trigger('reset')
}

const deleteFilmFailure = function () {
  $('#display-films').html('')
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
