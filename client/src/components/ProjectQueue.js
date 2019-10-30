import React from 'react'
import '../styles/ProjectQueue.css'

export default props => {
  const tasks = [
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
    }
  ]

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
        {tasks.map(task => (
            <div key={task.id} className="projectsQueue">
              <h4>{task.name}</h4>
              <div className='projectsInfo'>
                <p>{task.projectType}</p>
                <p>Ticket #{task.ticketNum}</p>
              </div>
            </div>
          ))}
      </div>
      <p className='projectsHeading'>Projects in Queue</p>
      <div className='projectsQueueContainer'>
          {works.map(task => (
            <div key={task.id} className="projectsQueue">
              <h4>{task.name}</h4>
              <div className='projectsInfo'>
                <p>{task.projectType}</p>
                <p>Ticket #{task.ticketNum}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}