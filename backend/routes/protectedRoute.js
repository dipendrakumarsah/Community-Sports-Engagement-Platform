// routes/protectedRoute.js

const express = require('express');
const authenticate = require('../middleware/authMiddleware');  // Import authentication middleware
const router = express.Router();

// Protected route
router.get('/protected', authenticate, (req, res) => {
  res.status(200).json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;
