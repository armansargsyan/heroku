'use strict';

const express = require('express');
const multer = require('multer');


const account = require('../DBMethods/account.js');

const router = express.Router();

const storage = multer.diskStorage({
  destination: 'public/img/avatar',
  filename: (req, file, cb) => {
    cb(null, `${req.body.id}.${file.mimetype.slice(6)}`);
  }
});
const upload = multer({
  storage: storage
});




router.post('/signIn', (req, res) => {
  console.log(req.body);
  account.signIn(req.body,{})
  .then(body => {
    console.log(body);
    res.status(body.status);
    res.send(body);
  });
});

router.put('/createAccount', (req, res) => {
  console.log(req.body);
  account.create(req.body,{})
  .then(body => {
    console.log(body);
    res.status(body.status);
    res.send(body);
  });
});

router.put('/changePassword', (req, res) => {
  console.log(req.body);
  account.update.password(req.body,{})
  .then(body => {
    console.log(body);
    res.status(body.status);
    res.send(body);
  });
});

router.put('/changeEmail', (req, res) => {
  console.log(req.body);
  account.update.email(req.body,{})
  .then(body => {
    console.log(body);
    res.status(body.status);
    res.send(body);
  });
});

router.put('/changePersonalData', (req, res) => {
  console.log(req.body);
  account.update.personalData(req.body,{})
  .then(body => {
    console.log(body);
    res.status(body.status);
    res.send(body);
  });
});

router.delete('/deleteAccount', (req, res) => {
console.log(req.body);
account.delete(req.body,{})
    .then(body => {
      console.log(body);
      res.status(body.status);
      res.send(body);
    });
});

router.put('/changeProfilePicture', upload.single('file'), (req, res) => {
  account.update.profilePicture(req, {})
      .then(body => {
        res.status(body.status);
        res.send(body);
      });
});

router.put('/deleteProfilePicture', (req, res) => {
    console.log(req);

    account.update.deleteProfilePicture(req.body, {})

        .then(body => {
            res.status(body.status);
            res.send(body);
        });
});



module.exports = router;
