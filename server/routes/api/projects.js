const express = require('express')
const router = express.Router();
const { check, validationResult } = require('express-validator')

// Projects Model
const Project = require('../../models/Project')

// @route   GET api/projects
// @desc    Receive all projects
// @access  Public
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find()
    res.json(projects)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
});

// @route   POST api/projects
// @desc    Create Project
// @access  Public
router.post('/', [
    check('name', 'Name is required')
    .not()
    .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('projectName', 'Project name is required')
    .not()
    .isEmpty(),
    check('projectType', 'Project Type is required')
    .not()
    .isEmpty(),
    check('description', 'Description is required')
    .not()
    .isEmpty()
  ]
, async (req,res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  
  const {
    name,
    email,
    projectName,
    projectType,
    multiple,
    dueDate,
    reference,
    attachment,
    description,
    ticketNumber,
    received,
    inProgress,
    completed
  } = req.body

  try {
    const project = new Project({
      name,
      email,
      projectName,
      projectType,
      multiple,
      dueDate,
      reference,
      attachment,
      description,
      ticketNumber,
      received,
      inProgress,
      completed
    })

    await project.save()
    res.json(project)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }

})



module.exports = router