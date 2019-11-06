import React,{ useEffect } from 'react'
import '../styles/Admin.css'
import { getProjects, setIt } from '../actions/project.actions'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { setId } from '../actions/project.actions'




const Admin = ({ project, id }) => {

  useEffect(() => {
    getProjects()
    
}, [])

  var somethingelse = []

console.log('array ', somethingelse)

  console.log("projects", project)

  return (
  <div class="adminContainer">
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
          <div key={task.ticketNumber} className="projectsQueue" onClick={e => setId(task._id)}>
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
            <div key={i++} className="projectsQueue" onClick={e => setId(task._id)}>
              <h4>{task.name}</h4>
              <div className='projectsInfo'>
                <p>{task.projectType}</p>
                <p>Ticket #{task.ticketNumber}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
    <div className="adminProjectInfoContainer">
    {project.map((task, i) => (
            <div key={i++} >
                { id === task._id ? 
                <div>
                    <div>
                        <div>
                            <p className="adminProjectInfoTitle">Name</p>
                            <p className="adminProjectInfoKey">{task.name}</p>
                            <p className="adminProjectInfoTitle">Email</p>
                            <p className="adminProjectInfoKey">{task.email}</p>
                            <p className="adminProjectInfoTitle">Project Name</p>
                            <p className="adminProjectInfoKey">{task.projectName}</p>
                            <p className="adminProjectInfoTitle">Project Type</p>
                            <p className="adminProjectInfoKey">{task.projectType}</p>
                            <p className="adminProjectInfoTitle">Multiple Items</p>
                            <p className="adminProjectInfoKey">{task.multiple === true ? "Multiple" : "Single"}</p>
                            <p className="adminProjectInfoTitle">New Listing</p>
                            <p className="adminProjectInfoKey">Some Filler Text</p>
                            <p className="adminProjectInfoTitle">Preferred Due Date</p>
                            <p className="adminProjectInfoKey">{task.dueDate ? task.dueDate : <p className="adminProjectInfoKey">Some filler text</p>}</p>
                            <p className="adminProjectInfoTitle">Reference Links</p>
                            <p className="adminProjectInfoKey">{task.url}</p>
                            <p className="adminProjectInfoKey">Some Filler text</p>
                            <p className="adminProjectInfoTitle">Description</p>
                            <div className="adminDescriptionBox">
                            <p className="adminProjectInfoKey">{task.description}</p>
                            </div>
                            <div className="adminButtonContainer">
                              {task.received === false ? <button className="adminButton">Start Project</button> : task.inProgress === true ? <button className="adminButton">Complete Project</button> : <p>Project Complete!</p>}
                              </div>

                        </div>
                    </div>
            </div>: null}
            </div>
        
            ))}
    </div>

    </div>
  )
}

const mapStateToProps = state => ({
  project: state.projects.project,
  id: state.projects.id
})

export default connect(
  mapStateToProps, 
  
)(Admin)