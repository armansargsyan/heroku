"use strict";
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const socket = require('socket.io');


const accountRouter = require('./routes/accountRouter.js');
const friendsRouter = require('./routes/friendsRouter.js');
// const roomRouter = require('./routes/roomRouter.js');
const finishPointRouter = require('./routes/finishPointRouter.js');
const socket = require('./socket/connection');

const app = express();

const Port = 5000;

function engine() {
  mongoose.connect('mongodb+srv://heroku:1111@cluster0-7l3fr.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("MongoDB connected successful");

})
  .catch(err => {
    console.log("DB connect faild: ",err);
  });

}
engine();

// app.use(cors());
app.use(express.json({extended: true}));
app.use(accountRouter);
app.use(friendsRouter);
// app.use(roomRouter);
app.use(finishPointRouter);

app.use(express.static('public'));
// app.use(express.static('img'));

app.get('/',(req, res) => {
  res.status(200);
  res.sendFile(`index.html`);
});


const server = app.listen(Port, console.log(`Server has been started on port ${Port}......`));
socket(server);
