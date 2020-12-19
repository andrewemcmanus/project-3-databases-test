const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songListSchema = new Schema({
  song_id: Integer,
  song_url: String
  // list song titles
})

const commentsSchema = new Schema({
  content: String,
  song_id: Integer
})

const usernameSchema = new Schema({
  username: String,
  comments: [commentsSchema]
})

// create User Schema:
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: [usernameSchema],
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minLength: 8
  },
  primary_inst: {
    type: String
  },
  stage_name: {
    type: String
  },
  song_list: [songListSchema],
  beats_list: [beatsListSchema]
});

module.exports = mongoose.model('User', userSchema);
