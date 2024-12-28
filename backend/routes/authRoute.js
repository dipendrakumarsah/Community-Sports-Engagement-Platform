// routes/authRoutes.js

const express = require('express');
const { login } = require('../controllers/authController');  // Import the login controller
const router = express.Router();

// POST route to handle login
router.post('/login', login);  // Call login controller when this endpoint is hit

module.exports = router;
