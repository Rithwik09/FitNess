const Activity = require('../models/activity');

// Controller to handle activities
exports.getActivitiesByDate = async (req, res) => {
  try {
    const date = req.params.date;
    const activities = await Activity.find({ date });
    res.json(activities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.recordWeeklyActivities = async (req, res) => {
  try {
    const weekStartDate = req.body.weekStartDate;
    const weekEndDate = req.body.weekEndDate;

    //activites
    const sampleActivities = [
      { date: weekStartDate, activities: ['walking', 'running', 'cycling'] },
      { date: weekEndDate, activities: ['walking', 'running'] },
      // Add more activities as needed
    ];

    await Activity.insertMany(sampleActivities);

    res.json({ message: 'Weekly activities recorded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
