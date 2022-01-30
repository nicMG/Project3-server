const express = require('express');
const WorkoutModel = require('../models/Workout.model');
const router = express.Router();

// will handle all GET requests to http:localhost:5005/api/todos
router.get('/workouts', (req, res) => {
  WorkoutModel.find()
    .then((todos) => {
      res.status(200).json(todos);
    })
    .catch((err) => {
      res.status(500).json({
        error: 'Something went wrong',
        message: err,
      });
    });
});

// will handle all POST requests to http:localhost:5005/api/create
router.post('/workouts/create', (req, res) => {
  const { name, shortDescription, description, image } = req.body;
  console.log(req.body);
  WorkoutModel.create({
    name: name,
    shortDescription,
    description: description,
    image,
  })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: 'Something went wrong',
        message: err,
      });
    });
});

// will handle all GET requests to http:localhost:5005/api/todos/:todoId
//PS: Don't type :todoId , it's something dynamic,
router.get('/workouts/:workoutId', (req, res) => {
  WorkoutModel.findById(req.params.workoutId)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: 'Something went wrong',
        message: err,
      });
    });
});

// will handle all DELETE requests to http:localhost:5005/api/todos/:id
router.delete('/workouts/:id', (req, res) => {
  WorkoutModel.findByIdAndDelete(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: 'Something went wrong',
        message: err,
      });
    });
});

// will handle all PATCH requests to http:localhost:5005/api/todos/:id
router.patch('/workouts/:id', (req, res) => {
  let id = req.params.id;
  const { name, description, completed } = req.body;
  WorkoutModel.findByIdAndUpdate(
    id,
    { $set: { name: name, description: description, completed: completed } },
    { new: true }
  )
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: 'Something went wrong',
        message: err,
      });
    });
});

module.exports = router;
