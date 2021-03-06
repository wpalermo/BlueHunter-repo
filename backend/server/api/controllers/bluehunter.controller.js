'use strict';


var mongoose = require('mongoose');
var books = mongoose.model('books');


exports.listAllBooks = function(req, res){

    books.find({}, function(err, book) {
        if(err)
            res.send(err);
        res.json(book)
    });
};

exports.insert = function(req, res) {
    
    var newBook = new books(req.body);
    debugger;
    newBook.save(function(err, data){
        if(err)
            res.send(err);
        res.json(data);
    });
};

exports.insertList = function(req, res) {
    var book;
    var responseData;
    debugger;

    req.body.forEach(element => {
        var newBook = new books(element);
        newBook.save(function(err, data){
            debugger;
            if(err)
                 res.send(err);
            responseData += data;

        });
    });

    debugger;
    res.json(responseData);
};




exports.search = function(req, res) {
    var id = req.params.id;
    res.send('search - id: ' + id);
};


exports.searchByAuthor = function(req, res) {
    var author = req.params.author_part;
    books.findById(author, function(err, book){
        if(err)
            res.send(err);
        res.json(book);
    });
};
