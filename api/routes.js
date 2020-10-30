'use strict'
module.exports = function(app){
    let apiCtrl = require('./controllers/APIController');

    app.route('/people')
        .get(apiCtrl.get)
        .post(apiCtrl.store)
}