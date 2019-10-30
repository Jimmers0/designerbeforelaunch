const mongoose = require('mongoose')

const ProjectScema = new mongoose.Schema ({
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
    contentType: String
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

module.exports = Project = mongoose.model('project',ProjectScema)