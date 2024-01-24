const mongoose = require('mongoose');

// Define activity schema
const activitySchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  activities: [
    {
      type: String,
      enum: ['walking', 'running', 'cycling'],
      required: true,
    },
    // Add other fields as needed
  ],
});

// Create activity model
const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
