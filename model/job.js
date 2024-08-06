
const mongoose = require('mongoose');

// const jobSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   company: { type: String, required: true },
//   location: { type: String, required: true },
//   type: { type: String, required: true }, 
//   category: { type: String, required: true }, 
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now }
// });
const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  company: String,
  location: String,
  salary: Number,
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;