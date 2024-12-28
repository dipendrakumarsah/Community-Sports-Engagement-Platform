const Event = require('../models/EventModel');
const User = require('../models/UserModel');

// Suggest events based on user preferences
exports.getEventSuggestions = async (req, res) => {
  const { userId } = req.params;

  try {
    // Find the user by their ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Fetch events based on the user's sport preferences
    const events = await Event.find({
      sportType: { $in: user.sportPreferences }, // Use the user's sport preferences
      date: { $gte: new Date() } // Only show events in the future
    });

    // Return the events or an empty array if no events are found
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
