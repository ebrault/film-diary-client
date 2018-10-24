'use strict'

const addFilmSuccess = function (data) {
  $('#display-films').html('')
  $('#diary-empty-message').addClass('hidden')
  $('#display-message').html('Add successful!')
  $('#display-message').css('color', '#66cc33')
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
  $('#display-films').css('color', '#66cc33')
  $('#add-film-form').trigger('reset')
  $('#modify-film-form').trigger('reset')
  $('#get-one-film-form').trigger('reset')
  $('delete-film-form').trigger('reset')
}

const addFilmFailure = function () {
  $('#display-films').html('')
  $('#diary-empty-message').addClass('hidden')
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', '#dd7711')
  $('#add-film-form').trigger('reset')
  $('#modify-film-form').trigger('reset')
  $('#get-one-film-form').trigger('reset')
  $('delete-film-form').trigger('reset')
}

const getAllFilmsSuccess = function (data) {
  if (data.films.length === 0) {
    $('#display-message').html('')
    $('#diary-empty-message').removeClass('hidden')
  } else {
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
      $('#display-films').css('color', '#66cc33')
    })
  }
}

const getAllFilmsFailure = function () {
  $('#display-films').html('')
  $('#diary-empty-message').addClass('hidden')
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', '#dd7711')
}

const getOneFilmSuccess = function (data) {
  $('#diary-empty-message').addClass('hidden')
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
  $('#display-films').css('color', '#66cc33')
  $('#add-film-form').trigger('reset')
  $('#get-one-film-form').trigger('reset')
  $('#modify-film-form').trigger('reset')
  $('delete-film-form').trigger('reset')
}

const getOneFilmFailure = function () {
  $('#diary-empty-message').addClass('hidden')
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', '#dd7711')
  $('#display-films').html('')
  $('#get-one-film-form').trigger('reset')
  $('#add-film-form').trigger('reset')
  $('#modify-film-form').trigger('reset')
  $('delete-film-form').trigger('reset')
}

const modifyFilmSuccess = function (data) {
  $('#diary-empty-message').addClass('hidden')
  $('#display-message').html('')
  $('#display-message').html('Update Successful!')
  $('#display-message').css('color', '#66cc33')
  $('#display-films').html('')
  $('#modify-film-form').trigger('reset')
  $('#get-one-film-form').trigger('reset')
  $('#add-film-form').trigger('reset')
  $('delete-film-form').trigger('reset')
}

const modifyFilmFailure = function () {
  $('#display-films').html('')
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', '#dd7711')
  $('#modify-film-form').trigger('reset')
  $('#get-one-film-form').trigger('reset')
  $('#add-film-form').trigger('reset')
  $('delete-film-form').trigger('reset')
}

const deleteFilmSuccess = function () {
  $('#diary-empty-message').addClass('hidden')
  $('#display-films').html('')
  $('#display-message').html('Deletion successful!')
  $('#display-message').css('color', '#66cc33')
  $('#delete-film-form').trigger('reset')
  $('#modify-film-form').trigger('reset')
  $('#get-one-film-form').trigger('reset')
  $('#add-film-form').trigger('reset')
}

const deleteFilmFailure = function () {
  $('#diary-empty-message').addClass('hidden')
  $('#display-films').html('')
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', '#dd7711')
  $('#delete-film-form').trigger('reset')
  $('#modify-film-form').trigger('reset')
  $('#get-one-film-form').trigger('reset')
  $('#add-film-form').trigger('reset')
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
