const express = require('express');
const { createEvent, joinEvent } = require('../controllers/eventController');
const router = express.Router();

router.post('/create', createEvent);
router.post('/join', joinEvent);

module.exports = router;
