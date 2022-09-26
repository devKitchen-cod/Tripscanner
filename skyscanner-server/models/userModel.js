const mongoose = require('mongoose')
// import mongoose from 'mongoose'

const User = new mongoose.Schema({
  name: {type: String },
  
  email:{type: String },
  password: {type: String }
})
// export default mongoose.model('User', User)
module.exports = mongoose.model('User', User)

// id: {type: String, required: true},
//   age: {type: String, required: true},