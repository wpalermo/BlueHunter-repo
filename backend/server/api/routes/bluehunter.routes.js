'use strict';
module.exports = function(app) {
  var bluehunter = require('../controllers/bluehunter.controller');

  // todoList Routes
  app.route('/insert')
    .post(bluehunter.insert);


  app.route('/search/:id')
    .get(bluehunter.search);
};  