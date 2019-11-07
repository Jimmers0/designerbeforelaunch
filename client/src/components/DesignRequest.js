import React ,{ useState} from 'react'
import '../styles/DesignRequest.css'
import { postProjects } from '../actions/project.actions'
import { connect } from 'react-redux'

import ProjectQueue from './ProjectQueue'

const DesignRequest = ({ project }) => {


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [projectName, setProjectName] = useState('')
  const [projectType, setProjectType] = useState('')
  const [multiple, setMultiple] = useState(false)
  const [dueDate, setDueDate] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')


  const handleSubmit = e => {
    e.preventDefault()
    postProjects(name, email, projectName, projectType, multiple, dueDate, url, description)
    console.log('Data: .........', "name" ,name, "email", email, "projectname",projectName, "projecttype",projectType, "printmultiple",multiple,"date", dueDate, "url", url, "description", description)
  }
    console.log()

  return (
    <div className='requestFormContainer'>  
      <form className='requestForm' onSubmit={handleSubmit}>
        <label className='formLabel'>Name</label>
        <input className='formInput' onChange={e => setName(e.target.value)} value={name} type='text' name='name' />

        <label className='formLabel'>Email</label>
        <input className='formInput' onChange={e => setEmail(e.target.value)} value={email} type='email' name='email' />

        <label className='formLabel'>Project Name</label>
        <input className='formInput' onChange={e => setProjectName(e.target.value)} value={projectName} type='text' name='projectName' />

        <label className='formLabel'>Project Type</label>
        <select className='formInput' onChange={e => setProjectType(e.target.value)} value={projectType}>
          <optgroup label='Digital'>
            <option value='banner'>Banner</option>
            <option value='emailBlast'>Email Blast</option>
            <option value='productImage'>Product Image</option>
            <option value='socialMediaAd'>Social Media Ad</option>
            <option value='video'>Video</option>
            <option value='websiteMockup'>Website Mockup</option>
            <option value='other'>Other  (Please be specific in Description)
</option>
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
        
        <label>
          <input
            type="checkbox" onChange={ev => {
            const { checked } = ev.currentTarget;
            console.log(checked)
            setMultiple(checked)
            console.log(multiple) // toggles to true and false
            // continue with the rest
            }}
          />
        </label>

        <label id='dueDate' className='formLabel'>Preferred Due Date</label>
        <input className='formInput' type='date' onChange={e => setDueDate(e.target.value)} value={dueDate} name='dueDate' />

        <label className='formLabel'>Reference Links</label>
        <input className='formInput' type='url' name='reference' onChange={e => setUrl(e.target.value)} value={url}/>

        <input type='file' name='upload' />

        <label className='formLabel'>Description</label>
        <textarea 
          id='description'
          className='formInput'
          onChange={e => setDescription(e.target.value)}
          value={description}
          placeholder='All information available on the project' 
          rows='5' 
          cols='33' 
          minLength='1' 
          maxLength='500'> 
        </textarea>

        <button className='submit' type='submit'>SUBMIT</button>
      </form>
      <ProjectQueue />
    </div>
  )
}

const mapStateToProps = state => ({
  project: state.projects.project
})

export default connect(
  mapStateToProps, 
  
)(DesignRequest)