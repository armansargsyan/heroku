"use strict";

const mongoose = require('mongoose');

const User = require('../DBModels/user.js');


const account = {

  authentication(req, res) {
    return new Promise(resolve => {
      User.findById(req.id, (err, found) => {
        if (err){
          res.status = 500;
          resolve(res);
          throw err;
        }
        if (!found){
          res.status = 404;
          resolve(res);
        }
        else {
          found.socketId = req.socketId;
          found.online = true;
          found.save(err => {
            if (err){
              res.status = 500;
              resolve(res);
              throw err;
            }
            res.status = 200;
            resolve(res);
          });
        }
      });
    });
  },

  logOut(req, res){
    return new Promise(resolve => {
      User.findOne({socketId: req})
          .exec((err, found) => {
            if (err){
              res.status = 500;
              resolve(res);
              throw err;
            }
            if (!found){
              res.status = 404;
              resolve(res);
            }
            else {
              found.socketId = null;
              found.online = false;
              found.save(err => {
                if (err){
                  res.status = 500;
                  resolve(res);
                  throw err;
                }
                res.status = 200;
                resolve(res);
              });
            }
          });
    });
  },

  create(req, res){
    return new Promise((resolve, reject) => {

      const user = new User({
        email: req.email,
        password: req.password,
        nickName: req.nickName,
        age: req.age,
        country: req.country,
        city: req.city

      });

      User.find({email: req.email})
      .exec((err, found) => {
        if(err) {
          res.status = 500;
          res.created = false;
          resolve(res);
          throw err;
        }
        if (found.length !== 0) {
          res.status = 200;
          res.created = false;
          res.body = 'emailUsed';
          console.log('email is used');
          resolve(res);
          return;
        }
        user.save(err => {
          if (err) {
            res.status = 500;
            res.created = false;
            resolve(res);
            throw err;
          }
          res.status = 201;
          res.created = true;


          res.body = {
            id: user.id,
            email: user.email,
            nickName: user.nickName,
            age: user.age,
            country: user.country,
            city: user.city
          };
          console.log("Created account");
          resolve(res)
        });
      });
    });


  },

  signIn(req, res){
    return new Promise((resolve, reject) => {
      User.findOne({email: req.email}, (err, found) => {
        if (err) {
          res.status = 500;
          res.entered = false;
          resolve(res);
          throw err;
        }

        if (!found) {
          res.status = 200;
          res.entered = false;
          res.body = 'wrongEmail';
          console.log('Email not found');
          resolve(res);
        }
        else if (req.password !== found.password) {
          res.status = 200;
          res.entered = false;
          res.body = 'wrongPassword';
          console.log('Wrong password');
          resolve(res);
        }
        else if(found.online){
          console.log(found);
          res.status = 200;
          res.entered = false;
          res.body = 'alreadyOnline';
          console.log('account online');
          resolve(res);
        }
        else {
          res.status = 200;
          res.entered = true;
          res.body = {};
          res.body.email = found.email;
          res.body.id = found.id;
          res.body.nickName = found.nickName;
          res.body.age = found.age;
          if(found.country && found.city)
            res.body.country = found.country + '`';
          else
            res.body.country = found.country;
          res.body.city = found.city;
          res.body.friendsId = found.friendsId;
          res.body.friendRequestsId = found.friendRequestsId;
          res.body.sentRequestsId = found.sentRequestsId;
          res.body.profilePicture = found.profilePicture;

          console.log("entered");
          resolve(res);
        }
      });
    });


  },

  delete(req, res){
    return new Promise((resolve, reject) => {

        User.findById(req.id, (err, found) => {
          if (err) {
            res.status = 500;
            res.deleted = false;
            resolve(res);

            throw err;
          }
          if (!found) {
            res.status = 404;
            res.deleted = false;
            resolve(res);

            console.log('ID not found');
            return;
          }
          if (found.password === req.password){
            found.remove();
            res.status = 200;
            res.deleted = true;
            resolve(res);
            console.log('deleted');
          }
          else {
            res.status = 200;
            res.deleted = false;
            res.body = 'wrongPassword';
            resolve(res);
            console.log('Password is wrong')
          }

        });
    });
  },

  update: {

    profilePicture(req, res){
      return new Promise(resolve => {

          User.findById(req.body.id,(err, found) => {
            if (err) {
              res.status = 500;
              res.changed = false;
              resolve(res);

              throw err;
            }

            if (!found) {
              res.status = 404;
              res.changed = false;
              resolve(res);

              console.log('ID not found');
            }
            else {
              const path = `/img/avatar/${req.body.id}.${req.file.mimetype.slice(6)}`;

              found.profilePicture = path;
              found.save(err => {
                if (err) {
                  res.status = 500;
                  res.changed= false;
                  resolve(res);

                  throw err;
                }
                res.status = 200;
                res.changed = true;
                res.body = found.profilePicture;
                resolve(res);

                console.log('Profile picture is changed');
              });
            }
          });
      });
    },

    deleteProfilePicture(req, res) {
      return new Promise(resolve => {
        User.findById(req.id, (err, found) => {
          if (err){
            res.status = 500;
            res.deleted = false;
            resolve(res);
            throw err;
          }
          if (!found){
            res.status = 404;
            res.deleted = false;
            resolve(res);
            console.log('not found');
          }
          else {
            found.profilePicture = '/img/avatar/defaultAvatar.jpg';
            found.save(err => {
              if (err){
                res.status = 500;
                res.deleted = false;
                resolve(res);
                throw err;
              }
              res.status = 200;
              res.deleted = true;
              res.body = found.profilePicture;
              resolve(res);
              console.log('deleted');
            });
          }
        });
      });
    },

    password(req, res){
      return new Promise((resolve, reject) => {
        User.findById(req.id, (err, found) => {
          if (err) {
            res.status = 500;
            res.changed = false;
            resolve(res);
            throw err;
          }

          if (!found) {
            res.status = 404;
            res.changed = false;
            console.log('ID not found');
            resolve(res);

            return;
          }

          if (found.password !== req.currentPassword) {
            res.status = 200;
            res.changed = false;
            res.body = 'wrongPassword';
            console.log('password is wrong');
            resolve(res);
            return;
          }
          found.password = req.newPassword;
          found.save(err => {
            if (err) {
              res.status = 500;
              res.changed = false;
              resolve(res);

              throw err;
            }
            res.status = 200;
            res.changed = true;
            console.log('password is changed');
            console.log(found);
            resolve(res);

          });
        });
      });

    },

    email(req, res){
      return new Promise((resolve, reject) => {
        User.findById(req.id, (err, found) => {
          if (err) {
            res.status = 500;
            res.changed = false;
            resolve(res);
            throw err;
          }

          if (!found) {
            res.status = 404;
            res.changed = false;
            console.log('ID not found');
            resolve(res);

            return;
          }

          User.find({
            email: req.newEmail
          }).exec((err, emailUsed) => {
            if (err) {
              res.status = 500;
              res.changed = false;
              resolve(res);

              throw err;
            }

            if (emailUsed.length != 0) {
              res.status = 200;
              res.changed = false;
              res.body = 'emailUsed';
              console.log('email is used');
              resolve(res);

              return;
            }

            found.email = req.newEmail;
            found.save(err => {
              if (err) {
                res.status = 304;
                res.changed= false;
                resolve(res);

                throw err;
              }

              res.status = 200;
              res.changed = true;
              res.body = {};
              res.body.email = found.email;

              console.log('email is changed');
              resolve(res);

            });
          });
        });
      });

    },

    personalData(req, res){
      return new Promise((resolve, reject) => {
        User.findById(req.id, (err, found) => {
          if (err) {
            res.status = 500;
            res.changed = false;
            resolve(res);
            throw err;
          }

          if (!found) {
            res.status = 404;
            res.changed = false;
            console.log('ID not found');
            resolve(res);

            return;
          }

          if (req.changeNickName) found.nickName = req.changeNickName;
          if (req.changeAge) found.age = req.changeAge;
          if (req.changeCountry) found.country = req.changeCountry;
          if (req.changeCity) found.city = req.changeCity;

          found.save(err => {
            if (err) {
              res.status = 500;
              res.changed = false;
              resolve(res);

              throw err;
            }

            res.status = 200;
            res.changed = true;
            res.body = {};
            res.body.nickName = found.nickName;
            res.body.age = found.age;
            if (found.country && found.city)
              res.body.country = found.country + '`';
            else
              res.body.country = found.country;
            res.body.city = found.city;

            console.log('data is changed');
            resolve(res);

          });
        });
      });

    }
  },


};

module.exports = account;
