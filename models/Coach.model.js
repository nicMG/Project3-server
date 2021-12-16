
const { Schema, model } = require("mongoose");
require("./Workout.model")

// 1. Define your schema
let CoachSchema = new Schema({
  name: String, 
  email: {
    type: String,
    required: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  image: String,
  description: String,
  routines:[
    {
      type: Schema.Types.ObjectId,
      ref: "workout",
    
    }
  ],
  avgRating: Number,
  isCoach: {
    type: Boolean,
    default: true
  },
  stats: {
    height: Number,
    weight: Number,
    bench: Number,
    squat: Number,
    deadlift: Number
  }
})

// 2. Define your model
let CoachModel = model('coach', CoachSchema)

// 3. Export your Model with 'module.exports'
module.exports = CoachModel