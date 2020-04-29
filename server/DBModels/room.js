"use strict";

const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    createDate: Date,
    admin: {
        type: Object,
        required: true
    },
    pin: {
        type: Number,
        max: 9999,
        min: 1000,
        default: null
    },
    name: {
        type: String,
        required: true,
        maxlength: 20,
        minlength: 2
    },
    finish: {
        type: Object,
        required: true
    },
    playersId: {
        type: [Object],
        default: null
    },
    started: {
        type: Boolean,
        default: false
    }
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
