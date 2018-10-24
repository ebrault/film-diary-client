'use strict'

const store = require('../store')

const signUpSuccess = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Sign up successful!')
  $('#display-message').css('color', '#66cc33')
  $('#sign-up-form').trigger('reset')
}

const signUpFailure = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', '#dd7711')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#display-message').removeClass('hidden')
  $('#display-films').removeClass('hidden')
  $('#display-message').html('Sign in successful!')
  $('#display-message').css('color', '#66cc33')
  $('#sign-in-form').trigger('reset')
  store.user = response.user
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#add-film-form').removeClass('hidden')
  $('#get-all-films-button').removeClass('hidden')
  $('#get-one-film-form').removeClass('hidden')
  $('#modify-film-form').removeClass('hidden')
  $('#delete-film-form').removeClass('hidden')
  $('#add-film-form').trigger('reset')
  $('#modify-film-form').trigger('reset')
  $('#get-one-film-form').trigger('reset')
  $('#add-film-form').trigger('reset')
}

const signInFailure = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', '#dd7711')
  $('#sign-in-form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Password changed successfully!')
  $('#display-message').css('color', '#66cc33')
  $('#change-password-form').trigger('reset')
  $('#add-film-form').trigger('reset')
  $('#modify-film-form').trigger('reset')
  $('#get-one-film-form').trigger('reset')
  $('#add-film-form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', '#dd7711')
  $('#change-password-form').trigger('reset')
  $('#add-film-form').trigger('reset')
  $('#modify-film-form').trigger('reset')
  $('#get-one-film-form').trigger('reset')
  $('#add-film-form').trigger('reset')
}

const signOutSuccess = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Sign out successful!')
  $('#display-message').css('color', '#66cc33')
  $('#display-films').html('')
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#add-film-form').trigger('reset')
  $('#modify-film-form').trigger('reset')
  $('#get-one-film-form').trigger('reset')
  $('#delete-film-form').trigger('reset')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#add-film-form').addClass('hidden')
  $('#diary-empty-message').addClass('hidden')
  $('#get-all-films-button').addClass('hidden')
  $('#get-one-film-form').addClass('hidden')
  $('#modify-film-form').addClass('hidden')
  $('#delete-film-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
}

const signOutFailure = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', '#dd7711')
  $('#add-film-form').trigger('reset')
  $('#modify-film-form').trigger('reset')
  $('#get-one-film-form').trigger('reset')
  $('#add-film-form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
