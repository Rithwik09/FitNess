const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
const activityRoutes = require('./routes/activityRoutes');
app.use('/api/activities', activityRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
