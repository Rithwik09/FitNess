const express = require('express');
const router = express.Router();
const activityController = require('../controllers/activityController');

// Routes for activities
router.get('/:date', activityController.getActivitiesByDate);
router.post('/record-weekly', activityController.recordWeeklyActivities);

module.exports = router;
