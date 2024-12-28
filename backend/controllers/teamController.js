const Team = require('../models/TeamModel');
const User = require('../models/UserModel');

// Create a new team
exports.createTeam = async (req, res) => {
  const { name, sportType, userId, eventId } = req.body;
  // console.log(req.body);

  try {
    const team = new Team({ name, sportType, members: [userId], event: eventId });
    await team.save();

    const user = await User.findById(userId);
    user.teams.push(team._id);
    await user.save();

    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Join a team
exports.joinTeam = async (req, res) => {
  const { teamId, userId } = req.body;

  try {
    const team = await Team.findById(teamId);
    const user = await User.findById(userId);

    if (!team || !user) {
      return res.status(404).json({ message: "Team or User not found" });
    }

    team.members.push(user._id);
    user.teams.push(team._id);

    await team.save();
    await user.save();

    res.status(200).json({ message: "User joined team", team, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
