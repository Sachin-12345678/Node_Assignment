const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

// Endpoint to create a new user
router.post('/users', async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = new User({ username, email });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Endpoint for user analytics
router.get('/user-analytics', async (req, res) => {
    try {
      const userCountsByMonth = await User.aggregate([
        {
          $group: {
            _id: {
              month: { $month: "$createdAt" },
              year: { $year: "$createdAt" }
            },
            count: { $sum: 1 }
          }
        },
        {
          $project: {
            _id: 0,
            month: "$_id.month",
            year: "$_id.year",
            count: 1
          }
        },
        {
          $sort: { year: 1, month: 1 }
        }
      ]);
      res.json(userCountsByMonth);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;
