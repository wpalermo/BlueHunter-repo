'use strict';


var mongoose = require('mongoose'),
bhdb = mongoose.model('bhdb');

exports.insert = function(req, res) {
    
    var newData = new bhdb(req.body);
    console.log('--- NEW DATA: ---- ' + req.body);
    
    debugger;
    newData.save(function(err, data){
        console.log('DATA: ' + data);

        if(err)
            res.send(err);
        res.json(data);
    });

    //res.send(' {"insert" : "insert"}');
};




exports.search = function(req, res) {
    var id = req.params.id;
    res.send('search - id: ' + id);
};
