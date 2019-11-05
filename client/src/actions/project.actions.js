import store from '../store'
import axios from 'axios'


export function getProjects() {
    axios.get('/api/projects').then(resp => {
        store.dispatch({
            type: 'GET_PROJECT',
            payload: resp.data
        })    
    })
}

export function postProjects(name, email, projectName, projectType, multiple, dueDate, url, description) {
    axios.post('/api/projects', {
        name: name,
        email: email,
        projectName: projectName,
        projectType: projectType,
        multiple: multiple,
        dueDate: dueDate,
        url: url,
        description: description

    }).then(resp => {
        console.log("data trying to submit", resp.data)
    })
}

export function updateProjects(name, email, projectName, projectType, multiple, dueDate, url, description) {
    axios.put('/api/projects/update/:id', {
        name: name,
        email: email,
        projectName: projectName,
        projectType: projectType,
        multiple: multiple,
        dueDate: dueDate,
        url: url,
        description: description
    }).then(resp => {
        console.log("Data updated: ", resp.data)
    })
}



            
        
  
