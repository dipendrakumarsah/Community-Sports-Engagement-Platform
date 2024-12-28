// controllers/teamController.js

const Team = require('../models/TeamModel');  // Import Team model
const User = require('../models/UserModel');  // Import User model

// Controller function for joining a team
const joinTeam = async (req, res) => {
  const { userId, teamId } = req.body;  // Expecting the userId and teamId in the request body

  try {
    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find the team by ID
    const team = await Team.findById(teamId);
    if (!team) {
      return res.status(404).json({ message: "Team not found" });
    }

    // Check if the user is already in the team
    if (team.members.includes(userId)) {
      return res.status(400).json({ message: "User is already part of the team" });
    }

    // Add the team ID to the user's teams array
    user.teams.push(team._id);

    // Add the user ID to the team's members array
    team.members.push(user._id);

    // Save both the user and team documents
    await user.save();
    await team.save();

    // Respond with a success message
    return res.status(200).json({
      message: "User successfully joined the team",
      team,
      user
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  joinTeam
};
