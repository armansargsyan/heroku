"use strict";

const Finish = require('../DBModels/finishPoint');


const finish = {
    create(req, res){
        return new Promise(resolve => {
           const finishPoint = new Finish({
               position: req.position,
               name: req.name
           });

           finishPoint.save(err => {
               if (err){
                   res.status = 500;
                   res.created = false;
                   resolve(res);
                   throw err;
               }
               res.status = 200;
               res.created = true;
               res.body = finishPoint;
               resolve(res);
               console.log("Created new finish point");
           });
        });
    },

    request(res){
        return new Promise(resolve => {
           Finish.find({})
               .exec((err, found) => {
                   if (err){
                       res.status = 500;
                       res.result = false;
                       resolve(res);
                       throw err;
                   }
                   if (!found.length){
                       res.status = 404;
                       res.result = false;
                       resolve(res);
                       console.log("not found");
                   }
                   else {
                       res.status = 200;
                       res.result = true;
                       res.body = found;
                       resolve(res);
                       console.log('result foud');
                   }
               });
        });
    }
};

module.exports = finish;