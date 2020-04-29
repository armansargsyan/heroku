"use strict";

const mongoose = require('mongoose');

const User = require('../DBModels/user.js');

const friend = {

    requestSend(req, res){
      return new Promise(resolve => {

          User.findById(req.id, (err, found) => {
            if (err) {
              res.status = 500;
              res.sent = false;
              resolve(res);
              throw err;
            }

            if (!found) {
              res.status = 404;
              res.sent = false;
              console.log('ID not found');
              resolve(res);
            }
            else {
              User.findById(req.friendId,(err, friendFound) => {
                if (err) {
                  res.status = 500;
                  res.sent = false;
                  resolve(res);

                  throw err;
                }

                if (!friendFound) {
                  res.status = 404;
                  res.sent = false;
                  console.log('friend ID not found');
                  resolve(res);
                }
                else {
                  if (found.friendsId.indexOf(req.friendId) === -1 &&
                      found.friendRequestsId.indexOf(req.friendId) === -1 &&
                      found.sentRequestsId.indexOf(req.friendId) === -1){
                    found.sentRequestsId.push(req.friendId);
                    friendFound.friendRequestsId.push(req.id);
                  }
                  else {
                    res.status = 200;
                    res.sent = false;
                    resolve(res);
                    console.log('xmm');
                    return;
                  }

                  friendFound.save(err => {
                    if (err) {
                      res.status = 500;
                      res.sent = false;
                      resolve(res);

                      throw err;
                    }

                    found.save(err => {
                      if (err) {
                        res.status = 500;
                        res.sent = false;
                        resolve(res);

                        throw err;
                      }

                      res.status = 200;
                      res.sent = true;
                      if (friendFound.online)
                        res.friendSocket = friendFound.socketId;
                      resolve(res);

                      console.log('friend request sent');
                    });
                  });
                }


              });
            }
          });
      });
    },

    add(req, res){
      return new Promise(resolve => {

          User.findById(req.id, (err, found) => {
            if (err){
              res.status = 500;
              res.added = false;
              resolve(res);
              throw err;
            }
            if (!found) {
              res.status = 404;
              res.added = false;
              console.log('ID not found');
              resolve(res);
            }
            else {
              User.findById(req.friendId, (err, friendFound) => {
                if (err){
                  res.status = 500;
                  res.added = false;
                  resolve(res);
                  throw err;
                }
                if (!friendFound) {
                  res.status = 404;
                  res.added = false;
                  console.log('friend ID not found');
                  resolve(res);
                }
                else {


                  found.friendRequestsId.splice(found.friendRequestsId.indexOf(req.friendId),1);
                  found.friendsId.push(req.friendId);

                  friendFound.sentRequestsId.splice(friendFound.sentRequestsId.indexOf(req.id),1);
                  friendFound.friendsId.push(req.id);


                  friendFound.save(err => {
                    if (err) {
                      res.status = 404;
                      res.added = false;
                      console.log('friendFound err');
                      resolve(res);

                      throw err;
                    }

                    found.save(err => {
                      if (err) {
                        res.status = 404;
                        res.added = false;
                        console.log("found err");
                        resolve(res);

                        throw err;
                      }
                      res.status = 200;
                      res.added = true;
                      if (friendFound.online){
                        res.friendSocket = friendFound.socketId;
                      }
                      resolve(res);

                      console.log("added");

                    });
                  });
                }
              });
            }
          });
      });
    },

    refuse(req, res){
      return new Promise(resolve => {
        User.findById(req.id, (err, found) => {
          if (err){
            res.status = 500;
            res.refused = false;
            resolve(res);
            throw err;
          }
          if (!found) {
            res.status = 404;
            res.refused = false;
            resolve(res);
            console.log("ID not found");
          }
          else {
            User.findById(req.friendId, (err, friendFound) => {
              if (err){
                res.status = 500;
                res.refused = false;
                resolve(res);
                throw err;
              }
              if (!friendFound) {
                res.status = 404;
                res.refused = false;
                resolve(res);

                console.log("Friend ID not found");
              }
              else {

                found.friendRequestsId.splice(found.friendRequestsId.indexOf(req.friendId),1);
                friendFound.sentRequestsId.splice(friendFound.sentRequestsId.indexOf(req.id),1);

                found.save(err => {
                  if (err){
                    res.status = 500;
                    res.refused = false;
                    resolve(res);
                    throw err;
                  }
                  friendFound.save(err => {
                    if (err){
                      res.status = 500;
                      res.refused = false;
                      resolve(res);
                      throw err;
                    }
                    res.status = 200;
                    res.refused = true;
                    if (friendFound.online){
                      res.friendSocket = friendFound.socketId;
                    }
                    resolve(res);

                    console.log('Refused');
                  });
                });
              }
            });
          }
        });
      });

    },

    delete(req, res){
      return new Promise(resolve => {
        User.findById(req.id, (err, found) => {
          if (err){
            res.status = 500;
            res.deleted = false;
            resolve(res);
            throw err;
          }
          if (!found) {
            res.status = 404;
            res.deleted = false;
            console.log("ID not found");
            resolve(res);
          }
          else {
            User.findById(req.friendId, (err, friendFound) => {

              if (err){
                res.status = 500;
                res.deleted = false;
                resolve(res);
                throw err;
              }
              if (!friendFound) {
                res.status = 404;
                res.deleted = false;
                console.log("Friend ID not found");
                resolve(res);
              }
              else {
                found.friendsId.splice(found.friendsId.indexOf(req.friendId),1);
                friendFound.friendsId.splice(friendFound.friendsId.indexOf(req.id),1);

                found.save(err => {
                  if (err){
                    res.status = 500;
                    res.deleted = false;
                    resolve(res);
                    throw err;
                  }
                  friendFound.save(err => {
                    if (err){
                      res.status = 500;
                      res.deleted = false;
                      resolve(res);
                      throw err;
                    }
                    res.status = 200;
                    res.deleted = true;
                    if (friendFound.online)
                      res.friendSocket = friendFound.socketId;
                    resolve(res);
                    console.log('Friend deleted');
                  });
                });
              }
            });
          }
        });
      });
    },


    render(req, res){
      return new Promise(resolve => {

          let chunk = req.friendsId.splice(req.loaded, 10);
          chunk.forEach((item, i) => {
            chunk[i] = mongoose.Types.ObjectId(item);
          });

          User.find({
            _id: chunk
          })
          .exec((err, found) => {
            if (err) {
              res.status = 500;
              resolve(res);
              throw err;
            }
            if (!found) {
              res.status = 404;
              console.log('not found');
              resolve(res);
              return ;
            }
            res.body = [];

            found.forEach(friend => {
              res.body.push({
                id: friend.id,
                nickName: friend.nickName,
                age: friend.age,
                country: friend.country,
                city: friend.city,
                profilePicture: friend.profilePicture
              })
            });
            res.status = 200;
            resolve(res);
            console.log(res);
          })



        });

    },

    requestRender(req, res){
      return new Promise(resolve => {

          let chunk = req.friendRequestsId.splice(req.loaded, 10);
          chunk.forEach(item => {
            item = mongoose.Types.ObjectId(item);
          });
          User.find({
            _id: chunk
          })
          .exec((err, found) => {
            if (err) {
              res.status = 500;
              resolve(res);
              throw err;
            }
            if (!found) {
              res.status = 404;
              console.log('not found');
              resolve(res);
              return ;
            }
            res.body = [];

            found.forEach(friendRequest => {
              res.body.push({
                id: friendRequest.id,
                nickName: friendRequest.nickName,
                age: friendRequest.age,
                country: friendRequest.country,
                city: friendRequest.city,
                profilePicture: friendRequest.profilePicture
              })
            });
            res.status = 200;
            resolve(res);
            console.log(res);
          });
        });

    },

    find(req, res){
      return new Promise(resolve => {
        User.find({
          nickName: {
            $regex:  req.regEx,
            $options: 'i'
           }
        })
        .exec((err, found) => {
          if (err) {
            res.status = 500;
            res.found = false;
            resolve(res);
            throw err;
          }
          if (found.length === 0) {
            res.status = 200;
            res.found = false;
            resolve(res);
            console.log('not found');
            return ;
          }
          res.status = 200;
          res.found = true;
          res.body = found;
          resolve(res);
          console.log('result sent');
        });
      });
    },

};

module.exports = friend;
