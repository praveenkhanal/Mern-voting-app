const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect{
process.env.MONGODB_URI || 'mongodb://localhost/vote', {useMongoClient: true} };


module.exports.User = require('./user');
module.exports.Poll = require('./poll');


