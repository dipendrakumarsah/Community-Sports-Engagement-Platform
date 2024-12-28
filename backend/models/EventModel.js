const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  date: { 
    type: Date, 
    required: true 
  },
  location: { 
    type: String, 
    required: true 
  },
  sportType: { 
    type: String, 
    required: true 
  },
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  maxParticipants: { 
    type: Number, 
    default: 100  // Default max participants
  },
  status: {
    type: String,
    enum: ['scheduled', 'ongoing', 'completed'],
    default: 'scheduled'
  }
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
