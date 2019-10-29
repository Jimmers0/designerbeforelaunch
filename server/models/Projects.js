const mongoose = require('mongoose')

const ProjectsScema = new mongoose.Schema ({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  projectName: {
    type: String,
    required: true
  },
  projectType: {
    type: String,
    required: true
  },
  multiple: {
    type: Boolean
  },
  dueDate: {
    type: Date,
    required: true
  },
  reference: {
    type: String,
  },
  attachment: {
    data: Buffer, 
    contentType: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  received: {
    type: Boolean
  },
  inProgress: {
    type: Boolean
  },
  completed: {
    type: Boolean
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Projects = mongoose.model('projects',ProjectsScema)