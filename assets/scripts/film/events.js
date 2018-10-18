'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onAddFilm = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.addFilm(data)
    .then(ui.addFilmSuccess)
    .catch(ui.addFilmFailure)
}

const onModifyFilm = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.modifyFilm(data)
    .then(ui.modifyFilmSuccess)
    .catch(ui.modifyFilmFailure)
}

const onGetAllFilms = function (event) {
  event.preventDefault()
  api.getAllFilms()
    .then(ui.getAllFilmsSuccess)
    .catch(ui.getAllFilmsFailure)
}

const onGetOneFilm = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getOneFilm(data)
    .then(ui.getOneFilmSuccess)
    .catch(ui.getOneFilmFailure)
}

const onDeleteFilm = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteFilm(data)
    .then(ui.deleteFilmSuccess)
    .catch(ui.deleteFilmFailure)
}

module.exports = {
  onAddFilm,
  onModifyFilm,
  onGetAllFilms,
  onGetOneFilm,
  onDeleteFilm
}
