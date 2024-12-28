const express = require('express');
const { getEventSuggestions } = require('../controllers/suggestionController');
const router = express.Router();

router.get('/:userId', getEventSuggestions);

module.exports = router;
