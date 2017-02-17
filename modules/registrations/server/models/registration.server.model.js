'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Registration Schema
 */
var RegistrationSchema = new Schema({
  teamName: {
    type: String,
    default: '',
    trim: true
  },
  contactPhone: {
    type: String,
    default: '',
    trim: true
  },
  playerOne:{
    type: String,
    default: '',
    trim: true
  },
  playerTwo:{
    type: String,
    default: '',
    trim: true
  },
  playerThree:{
    type: String,
    default: '',
    trim: true
  },
  playerFour:{
    type: String,
    default: '',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Registration', RegistrationSchema);
