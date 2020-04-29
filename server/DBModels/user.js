"use strict";

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  online: {
    type: Boolean,
    default: false
  },
  socketId: {
    type: String,
    default: null
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    maxlength: 20,
    minlength: 6
  },
  nickName: {
    type: String,
    required: true,
    maxlength: 20,
    minlength: 2
  },
  age: {
    type: Number,
    required: true
  },
  country: {
    type: String,
    default: ""
  },
  city: {
    type: String,
    default: ""
  },
  friendsId: {
    type: [String],
    default: null
  },
  friendRequestsId: {
    type: [String],
    default: null
  },
  sentRequestsId: {
    type: [String],
    default: null
  },
  profilePicture: {
    type: String,
    default: '/img/avatar/defaultAvatar.jpg'
  },
  inGame: {
    type: Boolean,
    default: false
  },
  room: {
    type: String,
    default: null
  },
  toRoom: {
    type: Object,
    default: null
  }

});

const User = mongoose.model('User', userSchema);

module.exports = User;
