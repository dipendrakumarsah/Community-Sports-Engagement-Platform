const express = require('express');
const { joinTeam } = require('../controllers/userController'); // Import the controller
const router = express.Router();

// Define the POST route for joining a team
router.post('/join', joinTeam);  // Use the controller function for this route

module.exports = router;
