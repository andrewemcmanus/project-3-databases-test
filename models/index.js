require('dotenv').config()
const mongoose = require('mongoose');
const { MONGO_URI } = require('../config/keys');

mongoose.connect( + "/Users", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = {
  User: require('./User')
}
