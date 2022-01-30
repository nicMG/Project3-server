const { Schema, model } = require('mongoose');

let WorkoutSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  comments: [String],
  shortDescription: String,
  description: String,
  duration: Number,
  rating: Number,
  image: String,
  createdBy: String,
  // routine: {
  //     week1:{
  //         day1:{
  //             name:String,
  //             comments:String,
  //             exercises:{
  //                 first: {
  //                     name: String,
  //                     sets:Number,
  //                     resps:Number,
  //                     weight: Number
  //                 }
  //             }
  //         },
  //         day2:{}
  //     },
  //     week2:{}
  // }
});

let WorkoutModel = model('workout', WorkoutSchema);

module.exports = WorkoutModel;
