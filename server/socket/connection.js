const socket = require('socket.io');

const account = require('../DBMethods/account');
const friend = require('../DBMethods/friend');

function socketConnect(server) {
    const io = socket(server);

    io.on('connect', (socket) => {
        console.log(socket.id, 'connected');


        socket.on('logIn', req => {
            req.socketId = socket.id;

            account.authentication(req, {})
                .then(() => {
                    console.log('connected');
                });
        });

        socket.on('disconnect', () => {
            account.logOut(socket.id, {})
                .then((res) => {
                    console.log(res);
                    console.log('disconnected')
                });
        });

        socket.on('sendRequest', (req, cb) => {
            friend.requestSend(req, {})
                .then(res => {
                    cb(res.sent);
                    if (res.sent){
                        io.to(res.friendSocket).emit('friendRequest', req.id);
                    }
                });
        });

        socket.on('friendAdd', (req, cb)=> {
            friend.add(req, {})
                .then(res => {
                    cb(res.added);
                    if (res.friendSocket){
                        io.to(res.friendSocket).emit('friendAdd', req.id);
                    }
                });
        });

        socket.on('friendRequestRemove', (req, cb) => {
            friend.refuse(req, {})
                .then(res => {
                   cb(res.refused);
                   if (res.friendSocket){
                       io.to(res.friendSocket).emit('friendRequestRemove', req.id);
                   }
                });
        });

        socket.on('friendDelete', (req, cb) => {
            friend.delete(req, {})
                .then(res => {
                    cb(res.deleted);
                    if (res.friendSocket){
                        io.to(res.friendSocket).emit('friendDelete', req.id);
                    }
                    else {
                        console.log('friendSocket error');
                    }
                });
        });

    });
}

module.exports = socketConnect;