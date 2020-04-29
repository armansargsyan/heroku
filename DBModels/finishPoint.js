"use strict";

const mongoose = require('mongoose');

const finishSchema = mongoose.Schema({
    position: {
        type: Object,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});


const Finish = mongoose.model('Finish', finishSchema);

module.exports = Finish;