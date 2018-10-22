'use strict'

const config = require('../config.js')
const store = require('../store.js')

const addFilm = function (data) {
  return $.ajax({
    url: config.apiUrl + '/films',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST',
    data: data
  })
}

const getAllFilms = function () {
  return $.ajax({
    url: config.apiUrl + '/films',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET'
  })
}

const getOneFilm = function (filmData) {
  const filmId = filmData.film.id
  return $.ajax({
    url: config.apiUrl + `/films/${filmId}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET'
  })
}

const modifyFilm = function (data) {
  const filmId = data.film.id
  return $.ajax({
    url: config.apiUrl + `/films/${filmId}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: data
  })
}

const deleteFilm = function (data) {
  const filmId = data.film.id
  return $.ajax({
    url: config.apiUrl + `/films/${filmId}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE',
    data: data
  })
}

module.exports = {
  addFilm,
  getAllFilms,
  getOneFilm,
  modifyFilm,
  deleteFilm
}
