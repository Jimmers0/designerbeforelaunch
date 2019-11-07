import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../styles/ViewProject.css'


const ViewProject = ({ project, id, match }) => {

    return(
       
        <div className="viewProjectContainer">
            
            {project.map((task, i) => (
            <div key={i++} >
                {match.params.id === task._id ? 
                <div className="vp">
                    <div className="vpLeft">
                        <div className="vpTitle">
                            {task.projectName}
                        </div>
                        <div className="vpSub">
                            <p>Submitted by:</p>
                            <p>{task.name}</p>
                            <p>{task.email}</p>
                        </div>
                        <div className="vpDescription">
                            <p>{task.multiple === true ? "(Multiple)" : "Single"}</p>
                            <p>{task.projectType}</p>
                            <div className="vpDescBox">
                                <p>{task.description}</p>
                            </div>

                        </div>
                    </div>

                    <div className="vpRight">
                        <div className="vpTicket">
                            <p>Ticket Number:</p>
                            <p>{task.ticketNumber}</p>
                            <p>Submitted:</p>
                            <p>{task.date}</p>
                            <p>Preferred due date:</p>
                            <p>{task.dueDate}</p>
                        </div>
                        <div>
                            <p>Reference links:</p>
                            <p>{task.url}</p>

                        </div>
                        <div>
                            <p>Project Status:</p>
                            <p>Task Recieved: {task.recieved === true ? "Recieved" : "Not Revieved"}</p>
                            <p>Task in progress: {task.inProgress === true ? "In Progress" : "Not in Progress"}</p>
                            <p>Completed: {task.completed === true ? "Complete" : "Incomplete"}</p>

                        </div>
                    </div>
             
            </div>: null}
            </div>
        
            ))}
            <div className='buttonsContainer'>
                <Link to={'/update/'+ match.params.id}><button type='button' className='projectViewButton1'>Edit</button></Link>
                <button type='button' className='projectViewButton2'>Delete</button>
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
    
  )(ViewProject)
