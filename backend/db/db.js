const mongoose = require('mongoose');

userSchema = new mongoose.Schema({
})


ratingSchema = new mongoose.Schema({
})

sessionSchema = new mongoose.Schema({
})

const User = mongoose.model("User", userSchema)
const Rating= mongoose.model("Rating", ratingSchema)
const Session= mongoose.model("Session", sessionSchema)


module.exports = {
  User,
  Rating,
  Session 
}
