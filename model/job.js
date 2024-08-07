
const mongoose = require('mongoose');


const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  company: String,
  location: String,
  salary: Number,
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;