import store from '../store'
import axios from 'axios'


export function getProjects() {
    axios.get('/api/projects').then(resp => {
        store.dispatch({
            type: 'SET_PROJECT',
            payload: resp.data
        })
        
    })
}


            
        
  
