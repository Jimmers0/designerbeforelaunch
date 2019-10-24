import React from 'react'
import '../styles/main.css'

export default props => {
  const handleSubmit = e => {
    e.preventDefault();
  }
  return (
    <form className='requestForm' onSubmit={handleSubmit}>
      <label className='formLabel'>Name</label>
      <input className='formInput' type='text' name='name' />

      <label className='formLabel'>Email</label>
      <input className='formInput' type='email' name='email' />

      <label className='formLabel'>Project Name</label>
      <input className='formInput' type='text' name='projectName' />

      <label className='formLabel'>Project Type</label>
      <select className='formInput'>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <div classname='formCheckbox'>
        <input className='checkboxInput' type='checkbox' name='printIndividual' /> Print - Individual <br/>
        <input className='checkboxInput' type='checkbox' name='printMulti' /> Print - Multiple <br/>
        <input className='checkboxInput' type='checkbox' name='webSocial' /> Web/Social <br/>
        <input className='checkboxInput' type='checkbox' name='video' /> Video <br/>
      </div>

      <label id='dueDate' className='formLabel'>Preferred Due Date</label>
      <input className='formInput' type='date' name='dueDate' />

      <label className='formLabel'>Reference Links</label>
      <input className='formInput' type='url' name='reference' />

      <label className='formLabel'>Description</label>
      <textarea 
        className='formInput'
        placeholder='All information available on the project' 
        rows='5' 
        cols='33' 
        minLength='1' 
        maxLength='500'> 
      </textarea>

      <button type='submit'>SUBMIT</button>
    </form>
  )
}