'use strict';
module.exports = function(app) {
  var bluehunter = require('../controllers/bluehunter.controller');

  // todoList Routes
  app.route('/insert')
    .post(bluehunter.insert);

  app.route('/insertList')
    .post(bluehunter.insertList);


  app.route('/searchs/:id')
    .get(bluehunter.search);

  app.route('/book/by-author/:author_part')
    .get(bluehunter.searchByAuthor);
};  