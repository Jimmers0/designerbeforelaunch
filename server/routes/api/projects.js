const express = require('express')
const router = express.Router();

// Projects Model
const Project = require('../../models/Project')

// @route   GET api/projects
// @desc    Receive all projects
// @access  Public
router.get('/', async (req, res) => res.send('Projects route'))

// @route   POST api/projects
// @desc    Request a project 
// @access  Public
router.get('/', async (req, res) => res.send('Projects route'))

// @route   PUT api/projects
// @desc    Update a Project
// @access  Private
router.get('/', async (req, res) => res.send('Projects route'))


module.exports = router