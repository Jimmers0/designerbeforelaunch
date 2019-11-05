import React,{ useEffect } from 'react'
import '../styles/projectQueue.css'
import { getProjects } from '../actions/project.actions'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { setId } from '../actions/project.actions'


const ProjectQueue = ({ project }) => {

  useEffect(() => {
    getProjects()
    
}, [])

  var somethingelse = []

console.log('array ', somethingelse)

  console.log("projects", project)

  return (
    <div className='queueContainer'>
      <p className='projectsHeading'>Projects in Progress</p>
      <div className='projectsQueueContainer'>
        {project.map(task => {
          if (task.inProgress === true ) {
            somethingelse.push('project')
          }
        })}
        { somethingelse.length === 0 ? <div>no tasks</div> :  
        project.map((task, i) => (
          task.inProgress === true ? 
          <div key={task.ticketNumber} className="projectsQueue">
            <h4>{task.name}</h4>
            <div className='projectsInfo'>
              <p>{task.projectType}</p>
              <p>Ticket #{task.ticketNumber}</p>
            </div>
          </div> : null 
        ))}
        </div>
      <p className='projectsHeading'>Projects in Queue</p>
        <div className='projectsQueueContainer'>
          {project.map((task, i) => (
            <Link to={"/" + task._id}  style={{textDecoration: 'none', overflow: 'hidden'}}><div key={i++} className="projectsQueue">
              <h4>{task.name}</h4>
              <div className='projectsInfo'>
                <p>{task.projectType}</p>
                <p>Ticket #{task.ticketNumber}</p>
              </div>
            </div>
            </Link>
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