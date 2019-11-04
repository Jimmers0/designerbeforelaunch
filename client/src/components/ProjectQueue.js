import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import '../styles/projectQueue.css'
import { getProjects } from '../actions/project.actions'
import { connect } from 'react-redux'

const ProjectQueue = ({ project }) => {

  useEffect(() => {
    getProjects()
    
}, [])



  const projects = useSelector(appState => appState.project)

  console.log("projects", project)


  const works = [
    {
    name: "blah",
    projectType: "something",
    ticketNum: 666
    },  
    {
    name: "blah1",
    projectType: "something",
    ticketNum: 666
    },  
    {
    name: "blah2",
    projectType: "something",
    ticketNum: 666
    },  
    {
    name: "blah2",
    projectType: "something",
    ticketNum: 666
    },  
    {
    name: "blah2",
    projectType: "something",
    ticketNum: 666
    },  
    {
    name: "blah2",
    projectType: "something",
    ticketNum: 666
    },  
  ]

  return (
    <div className='queueContainer'>
      <p className='projectsHeading'>Projects in Progress</p>
      <div className='projectsQueueContainer'>
        {works.map((task, i) => (
            <div key={i++} className="projectsQueue">
              <h4>{task.name}</h4>
              <div className='projectsInfo'>
                <p>{task.projectType}</p>
                <p>Ticket #{task.ticketNumber}</p>
              </div>
            </div>
          ))}
      </div>
      <p className='projectsHeading'>Projects in Queue</p>
      <div className='projectsQueueContainer'>
          {project.map((task, i) => (
            <div key={i++} className="projectsQueue">
              <h4>{task.name}</h4>
              <div className='projectsInfo'>
                <p>{task.projectType}</p>
                <p>Ticket #{task.ticketNumber}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

const mapStateToProps = state => ({
  project: state.projects.project
})

export default connect(
  mapStateToProps, 
  
)(ProjectQueue)