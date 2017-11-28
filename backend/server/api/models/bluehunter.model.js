'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sequenceGenerator = require('mongoose-sequence-plugin');

var pluginOptions = {field: 'id',
                     startAt: 1,
                     prefix: '',
                     maxSaveRetries: 2 };

/** Schema de livros */
var booksSchema = new Schema({
  title: {
    type: String,
    required: 'Insert the book name'
  },
  author: {
    type: String,
    required: 'Insert the author name'
  },
  creation_date: {
    type: Date,
    default: Date.now
  }
});


/** schema de usuario  */
var userSchema = new Schema({
  name: {
    type: String,
    required: 'Insert the book name'
  },
  creation_date: {
    type: Date,
    default: Date.now
  }
});

booksSchema.plugin(sequenceGenerator, pluginOptions);


module.exports = mongoose.model('books', booksSchema);
module.exports = mongoose.model('users', userSchema);