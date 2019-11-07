import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../styles/ViewProject.css'

import { updateProjects } from '../actions/project.actions'


const EditProject = ({ project, match }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [projectName, setProjectName] = useState('')
  const [projectType, setProjectType] = useState('')
  const [multiple, setMultiple] = useState(false)
  const [dueDate, setDueDate] = useState(Date)
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')

  const id = match.params.id

const handleSubmit = e => {
  e.preventDefault()
  updateProjects(id, name, email, projectName, projectType, dueDate, url, description)
}

    return(
        <form className="viewProjectContainer" onSubmit={handleSubmit}>
            
            {project.map((task, i) => ( 
            <div key={i++} >
                {match.params.id === task._id ? 
                <div className="vp">
                    <div className="vpLeft">
                        <div className="vpTitle">
                            <input className='vpProjectName' defaultValue={task.projectName} onChange={e => setProjectName(e.target.value)} />
                        </div>
                        <div className="vpSub">
                            <p>Submitted by: </p>
                            <label>Name: </label>
                            <input className='vpName' defaultValue={task.name} onChange={e => setName(e.target.value)}/>
                            <label>Email: </label>
                            <input className='vpEmail' defaultValue={email} onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className="vpDescription">
                            <label>{task.multiple === true ? "(Multiple)" : "Single"}</label>
                            <p>Project Type: </p>
                            <select className='formInput' onChange={e => setProjectType(e.target.value)} defaultValue={projectType}>
                              <optgroup label='Digital'>
                                <option value='banner'>Banner</option>
                                <option value='emailBlast'>Email Blast</option>
                                <option value='productImage'>Product Image</option>
                                <option value='socialMediaAd'>Social Media Ad</option>
                                <option value='video'>Video</option>
                                <option value='websiteMockup'>Website Mockup</option>
                                <option value='other'>Other  (Please be specific in Description)</option>
                              </optgroup>
                              <optgroup label='Physical Product'>
                                <option value='bottleOpener'>Bottle Opener</option>
                                <option value='clothing'>Clothing</option>
                                <option value='keyChain'>Key Chain</option>
                                <option value='popSocket'>Pop Socket</option>
                                <option value='usb'>USB</option>
                                <option value='other'>Other  (Please be specific in Description)</option>
                              </optgroup>
                              <optgroup label='Print'>
                                <option value='businessCard'>Business Card</option>
                                <option value='brochureBiFold'>Brochure - Bi-fold</option>
                                <option value='brochureTriSquare'>Brochure - Trifold Square</option>
                                <option value='brochureTriStandard'>Brochure - Trifold Standard</option>
                                <option value='catalogMore'>Catalog - Less than 50 pages</option>
                                <option value='catalogLess'>Catalog - More than 50 pages</option>
                                <option value='documentFull'>Document - Full Sheet</option>
                                <option value='documentHalf'>Document - Half Sheet</option>
                                <option value='flyer4x6'>Flyer - 4x6</option>
                                <option value='flyer5x7'>Flyer - 5x7</option>
                                <option value='flyer6x9'>Flyer - 6x9</option>
                                <option value='postCard4x6'>Post Card 4x6</option>
                                <option value='postCard5x7'>Post Card 5x7</option>
                                <option value='postCard6x9'>Post Card 6x9</option>
                                <option value='poster11x17'>Poster 11x17</option>
                                <option value='poster24x36'>Poster 24x36</option>
                                <option value='other'>Other  (Please be specific in Description)</option>
                              </optgroup>
                              <optgroup label='Other'>
                                <option value='consultation'>Consultation</option>
                                <option value='labeling'>Labeling</option>
                                <option value='other'>Other  (Please be specific in Description)</option>
                              </optgroup>
                            </select>
                            <div className="vpDescBox">
                              <textarea className='updateDescription' defaultValue={task.description} onChange={e => setDescription(e.target.value)}></textarea>
                            </div>

                        </div>
                    </div>

                    <div className="vpRight">
                        <div className="vpTicket">
                            <p>Ticket Number: {task.ticketNumber}</p>
                            <label>Submitted: {task.date} </label>
                            <label>Preferred due date: </label>
                            <input type='date' defaultValue={task.dueDate} onChange={e => setDueDate(e.target.value)}/>
                        </div>
                        <div>
                            <label>Reference links: </label>
                            <input type='text' defaultValue={task.url} onChange={e => setUrl(e.target.value)}/>
                            <label></label>

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
            <button type='submit' className='projectViewButton1'><Link to={'/' + match.params.id}>Save</Link></button>
                
                
            </div>
        </form>
    )

}

const mapStateToProps = state => ({
    project: state.projects.project,
    id: state.projects.id
  })
  
  export default connect(
    mapStateToProps
  )(EditProject)
