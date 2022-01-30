const { Schema, model } = require('mongoose');
require('./Workout.model');

// 1. Define your schema
let UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  image: String,
  routines: [
    {
      type: Schema.Types.ObjectId,
      ref: 'workout',
    },
  ],
  stats: {
    height: Number,
    weight: Number,
    bench: Number,
    squat: Number,
    deadlift: Number,
  },
  isCoach: {
    type: Boolean,
    default: false,
  },
});

// 2. Define your model
let UserModel = model('user', UserSchema);

// 3. Export your Model with 'module.exports'
module.exports = UserModel;
