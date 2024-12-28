const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  // Changed 'preferences' to 'sportPreferences' for clarity
  sportPreferences: {
    type: [String],  // Array of sport types the user is interested in
    default: []
  },
  // Use ObjectId references to teams the user is part of
  teams: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team'  // Reference to the Team model
  }],
  // List of events the user has attended
  eventsAttended: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event'  // Reference to the Event model
  }]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
