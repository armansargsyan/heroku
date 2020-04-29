"use strict";

const express = require('express');

const finishPoint = require('../DBMethods/finishPoint');

const router = express.Router();

router.get('/finishPoints', (req, res) => {
    finishPoint.request({})
        .then(body => {
            console.log(body);
            res.status(body.status);
            res.send(body);
        })
        .catch(err => console.log(err));
});

module.exports = router;