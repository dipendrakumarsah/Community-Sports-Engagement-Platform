const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sportType: { type: String, required: true },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event'
  }
}, { timestamps: true });

const Team = mongoose.model('Team', teamSchema);
module.exports = Team;
