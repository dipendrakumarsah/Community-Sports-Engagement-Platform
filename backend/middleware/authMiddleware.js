// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');

// Middleware to authenticate the user using JWT
const authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');  // Get token from Authorization header

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Verify the token using the secret key
    req.user = decoded;  // Store user info in the request object
    next();  // Proceed to the next middleware or route handler
  } catch (error) {
    return res.status(400).json({ message: 'Invalid token.' });
  }
};

module.exports = authenticate;
