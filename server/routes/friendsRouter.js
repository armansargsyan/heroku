'use strict';

const express = require('express');

const friend = require('../DBMethods/friend.js');

const router = express.Router();

router.post('/friendRender', (req, res) => {
  console.log(req.body);
  friend.render(req.body, {})
  .then(body => {
    console.log(body);
    res.status(body.status);
    res.send(body);
  }).catch(err => {
    throw err;
  });
});

router.put('/friendDelete', (req, res) => {
  console.log(req.body);
  friend.delete(req.body,{})
  .then((body) => {
    console.log(body);
    res.status(body.status);
    res.send(body);
  }).catch(err => {
    throw err;
  });
});

router.post('/friendRequestRender', (req, res) => {
  console.log(req.body);
  friend.requestRender(req.body, {})
  .then(body => {
    console.log(body);
    res.status(body.status);
    res.send(body);
  }).catch(err => {
    throw err;
  });
});

router.put('/requestRemove', (req, res) => {
  console.log(req.body);
  friend.refuse(req.body, {})
  .then(body => {
    console.log(body);
    res.status(body.status);
    res.send(body);
  }).catch(err => {
    throw err;
  });
});

router.put('/friendAdd', (req, res) => {
  console.log(req.body);
  friend.add(req.body, {})
  .then(body => {
    console.log(body);
    res.status(body.status);
    res.send(body);
  }).catch(err => {
    throw err;
  });
});

router.post('/friendFind', (req, res) => {
  console.log(req.body);
  friend.find(req.body, {})
  .then(body => {
    console.log(body);
    res.status(body.status);
    res.send(body);
  }).catch(err => {
    throw err;
  });
});
//MAybe delete
router.put('/requestSend', (req, res) => {
  console.log(req.body);
  friend.requestSend(req.body, {})
  .then(body => {
    console.log(body);
    res.status(body.status);
    res.send(body);
  }).catch(err => {
    throw err;
  });
});

router.post('/checkUpdate', (req, res) => {
  console.log(req.body);
  friend.checkUpdate(req.body,{})
      .then(body => {
        res.status(body.status);
        res.send(body);
        console.log(body);
      });
});

module.exports = router;
