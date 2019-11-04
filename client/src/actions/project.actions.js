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

export function postProjects(name, email, projectName, projectType, description) {
    axios.post('/api/projects', {
        name: name,
        email: email,
        projectName: projectName,
        projectType: projectType,
        description: description

    }).then(resp => {
        console.log("data trying to submit", resp.data)
    })
 
}


            
        
  
