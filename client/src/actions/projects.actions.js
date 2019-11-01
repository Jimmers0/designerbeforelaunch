import store from '../store'
import axios from 'axios'

export default function allProjects() {
  axios.get("/api/projects").then(resp => {
    store.dispatch({
      type: "GET_PROJECTS",
      payload: resp.data
    });
    console.log('projects action', resp.data)
  });
}