const { Schema, model } = require("mongoose");

// 1. Define your schema
let WorkoutSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    duration: Number,
    rating: Number,
    image: String,
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
})

// 2. Define your model
let WorkoutModel = model('workout', WorkoutSchema)

// 3. Export your Model with 'module.exports'
module.exports = WorkoutModel